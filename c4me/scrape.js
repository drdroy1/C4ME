const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";
const puppeteer = require('puppeteer');

const cd_base_url = 'http://www.collegedata.com/';
const r_url = 'https://www.timeshighereducation.com/rankings/united-states/2020#!/page/0/length/-1/sort_by/rank/sort_order/asc/cols/stats';

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('', function(req, res){
	//scrape_colleges();

	res.send('KO')
	//res.sendFile(__dirname + "login.html");
})

async function scrape_hs(hsname) {

}

async function search_hs(str) {

}

async function scrape_colleges(){
	let rname_list = [];
	let rval_list = [];

	const browser =  await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();
	await page.goto(r_url);
	const content = await page.content();
	const $1 = cheerio.load(content);
	
	// scrape rank from WSJ
	$1('a.ranking-institution-title').each(function(index){
		let r = $1(this).parent().prev().text();
		if(r.indexOf('=') > -1) {
			r = r.substring(1);
		}
		rname_list.push($1(this).text().trim());
		rval_list.push(r);
	});

	let f = fs.readFileSync('tmp/colleges.txt', 'utf8');
	flines = f.split('\n');
	fsize = flines.length;
	for(i=0; i<fsize; ++i) {
		let college = {
			name: '',
			size: 0,
			admis_num: -1,
			admis_percent: -1,
			cost_gen: -1,
			cost_instate: -1,
			cost_outstate: -1,
			location: '',
			majors: [],
			ranking: '',
			testscores: {
				avg_gpa: -1,
				sat_math: {
					avg: -1,
					lrange: -1,
					rrange: -1
					},
				sat_ebrw: {
					avg: -1,
					lrange: -1,
					rrange: -1
				},
				act_composite: {
					avg: -1,
					lrange: -1,
					rrange: -1
				}
			}
		}
		
		college.name = flines[i].replace(/\r/g, '');
		let cname = college.name.replace('SUNY', 'State University of New York');
		cname = cname.replace(/,/g, '');
		cname = cname.replace(/ /g, '\-');

		// fetch with puppeteer
		await page.goto(cd_base_url + '/college/' + cname);
		const cd_content = await page.content();
		const $0 = cheerio.load(cd_content);
		// found page
		if($0('li.breadcrumb-item.active').text() == 'College Profile') {
			// admission info
			let adminStr = $0("dt:contains('Overall Admission Rate')").next().first().text().split(' ');
			college.admis_percent = parseInt(adminStr[0].substring(0, adminStr[0].indexOf('%')))/100;
			//console.log(adminStr);
			if(adminStr.length > 2) {
				college.admis_num = parseInt(adminStr[2].replace(/,/g, ''))*college.admis_percent;
			}

			// college size
			college.size = parseInt($0('div.d-inline-block.text-left > span.h2').text().replace(/,/g, ''));
			
			// standardize test score
			let gpa = $0("dt:contains('Average GPA')").next().first().text();
			if(gpa != 'Not reported') {
				college.testscores.avg_gpa = parseFloat(gpa);
			}
	
			let math = ($0("dt:contains('SAT Math')").next().first().text()).trim();
			college.testscores.sat_math = parseTestscores(math);
	
			let ebrw = ($0("dt:contains('SAT EBRW')").next().first().text()).trim();
			college.testscores.sat_ebrw = parseTestscores(ebrw);

			let act = ($0("dt:contains('ACT Composite')").next().first().text()).trim();
			college.testscores.act_composite = parseTestscores(act);

			// cost
			let costStr = ($0("dt:contains('Cost of Attendance')").next().first().text()).trim();
			if(costStr.indexOf('Out-of-state') > -1) {
				let costSplit = costStr.split('Out-of-state: ');

				college.cost_instate = parseInt(costSplit[0].substring(costSplit[0].indexOf('$')+1).replace(/,/g, ''));
				college.cost_outstate = parseInt(costSplit[1].substring(1).replace(/,/g, ''));
			} else {
				college.cost_gen = parseInt(costStr.substring(1).replace(/,/g, ''));
			}

			// location
			college.location = $0('#mainContent').next().text();

			// majors
			let url_id = $0("h2:contains('Academics')").next().next().attr('href');
			let mpath = $0(url_id).attr('href');
			/*
			fetch the academics see more page
			await page.goto(cd_base_url + mpath);
			*/
			$0('h3:contains("Undergraduate Majors") ~ div.row > div.col-sm-6').each(function(){
				let x = $0(this).text();
				college.majors.push(x.trim());
			});

			// ranking
			let rindex = rname_list.indexOf(college.name);
			if(rindex > -1) {
				college.ranking = rval_list[rindex];
			}

			// adding to db
			mongoClient.connect(mongodb, function(err, db){
				if (err) throw err;
				let currentDB = db.db('c4me');
				currentDB.collection('college').findOneAndDelete({name:college.name}, function(err, result) {
					if (err) throw err;
					if (result != null) {
						console.log(result);
					} else {
						console.log('Not Found');
					}
				});
				currentDB.collection('college').insertOne(college, function(err, result) {
					if (err) throw err;
					if (result != null) {
						console.log(result);
					} else {
						console.log('Could not add');
					}
				});
			});
			console.log('Done '+college.name);
		} else {
			console.log('Error: Could not load <' + cname + '>');
		}

	}
}

function parseTestscores(str) {
	parsed = {
		avg: -1,
		lrange: -1,
		rrange: -1
	}
	if(str != 'Not reported') {
		strSplit = str.split(' average ');
		if(str.indexOf(' average ') > -1) { // Avg Given
			parsed.avg = strSplit[0];
			if(strSplit.length > 1) {
				str = strSplit[1].substring(0, strSplit[1].indexOf(' '));
				strSplit = str.split('-');
				parsed.lrange = strSplit[0];
				parsed.rrange = strSplit[1];
			}
		} else {
			str = strSplit[0].substring(0, strSplit[0].indexOf(' '));
			strSplit = str.split('-');
			parsed.lrange = strSplit[0];
			parsed.rrange = strSplit[1];
		}
	}
	return parsed;
}

app.listen(8081);
