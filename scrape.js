const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";

const cd_base_url = 'http://www.collegedata.com/';

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('', function(req, res){
	let f = fs.readFileSync('./tmp/colleges.txt', 'utf8');
	flines = f.split('\n');
	fsize = flines.length;
	for(i=0; i<fsize; ++i) {
		scrape(flines[i]);
		//console.log(flines[i]);
	}
	//scrape('Stony Brook University');

	res.send('KO')
	//res.sendFile(__dirname + "login.html");
})

async function scrape(cname){
	var college = {
		name: '',
		size: 0,
		admission: {
			num: 0,
			percent: 0.0
		},
		cost: {
			gen: -1,
			instate: -1,
			outstate: -1
		},
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

	college.name = cname.replace(/\r/g, '');
	console.log(college.name);
	c = cname.replace(/ /g, '\-');
	const fetch_data = async function(){
	        //let result = await axios.get('http://allv22.all.cs.stonybrook.edu/~stoller/cse416/collegedata/Stony-Brook-University/');
		let result = await axios.get(cd_base_url + '/college/' + c)
			.catch(function(error){
				console.log(cname);
				return;
			});
		//console.log(cd_base_url + '/college/' + c);
        	return cheerio.load(result.data);
	};	
	
	const $ = await fetch_data(); 
	// adminission info
	var adminStr = ($("dt:contains('Overall Admission Rate')").next().first().text()).split(' ');
	college.admission.percent = parseInt(adminStr[0].substring(0, adminStr[0].indexOf('%')))/100;
	college.admission.num = parseInt(adminStr[2].replace(/,/g, ''))*college.admission.percent;
	// college Size
	college.size = parseInt($('div.d-inline-block.text-left > span.h2').text().replace(/,/g, ''));
	// standardize test score
	var gpa = $("dt:contains('Average GPA')").next().first().text();
	if(gpa != 'Not reported') {
		college.testscores.avg_gpa = parseFloat(gpa);
	}
	
	var math = ($("dt:contains('SAT Math')").next().first().text()).trim();
	college.testscores.sat_math = parseTestscores(math);
	
	var ebrw = ($("dt:contains('SAT EBRW')").next().first().text()).trim();
	college.testscores.sat_ebrw = parseTestscores(ebrw);

	var act = ($("dt:contains('ACT Composite')").next().first().text()).trim();
	college.testscores.act_composite = parseTestscores(act);

	// cost
	var costStr = ($("dt:contains('Cost of Attendance')").next().first().text()).trim();
	if(costStr.indexOf('Out-of-state') > -1) {
		var costSplit = costStr.split('Out-of-state: ');

		college.cost.instate = parseInt(costSplit[0].substring(costSplit[0].indexOf('$')+1).replace(/,/g, ''));
		college.cost.outstate = parseInt(costSplit[1].substring(1).replace(/,/g, ''));
	} else {
		college.cost.gen = parseInt(costStr.substring(1).replace(/,/g, ''));
	}

	// location
	college.location = $('#mainContent').next().text();

	// majors
	var url_id = $("h2:contains('Academics')").next().next().attr('href');
	var mpath = $(url_id).attr('href');
	const mresult = await axios.get(cd_base_url + mpath);
	const $0 = cheerio.load(mresult.data);
	$('h3:contains("Undergraduate Majors") ~ div.row > div.col-sm-6').each(function(){
		x = $(this).text();
		college.majors.push(x.trim());
	});
	
	// ranking
	//var rurl = "https://www.timeshighereducation.com/rankings/united-states/2020#!/page/0/length/-1/sort_by/rank/sort_order/asc/cols/stats";
	/*
	var rurl = "https://www.timeshighereducation.com/rankings/united-states/2020#survey-answer";
	const rresult = await axios.get(rurl);
	const $1 = cheerio.load(rresult.data);
	*/
	//console.log($1('tr').find('a:contains("'+cname+'")').parent('td.name.namesearch').siblings('td.rank.sorting_1.sorting_2').html());
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		console.log('Connected to MongoDB');
		let currentDB = db.db('c4me');
		currentDB.collection('college').findOne({name:cname}, function(err, result) {
			if(result != null) {
				currentDB.collection('college').updateOne({name:cname}, {$set:college}, function(err, result){
					if (err) throw err;
					console.log('Found+Update '+result);
				});
			} else {
				currentDB.collection('college').insertOne(college, function(err, result){
					if (err) throw err;
					console.log('New '+result);
				});
			}
		});
	});
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
