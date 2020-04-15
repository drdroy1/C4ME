const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";
const puppeteer = require('puppeteer');
const url = require('url');

const cd_base_url = 'http://www.collegedata.com/';
const r_url = 'https://www.timeshighereducation.com/rankings/united-states/2020#!/page/0/length/-1/sort_by/rank/sort_order/asc/cols/stats';
const shs_url0 = 'https://nces.ed.gov/ccd/schoolsearch/school_list.asp?Search=1&InstName=';
const shs_url1 = '&SchoolID=&Address=&City=&State=&Zip=&Miles=&County=&PhoneAreaCode=&Phone=&DistrictName=&DistrictID=&SchoolType=1&SchoolType=2&SchoolType=3&SchoolType=4&SpecificSchlTypes=all&IncGrade=-1&LoGrade=10&HiGrade=13&SchoolPageNum=';
//const hs_url = 'https://www.niche.com/k12/';
const nmirror_url = 'http://allv22.all.cs.stonybrook.edu/~stoller/cse416/niche/';

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/college', function(req, res){
	res.render('admin_scrape.ejs');
});

app.post('/college', function(err, res){
	scrape_colleges(res);
})

app.get('', function(req, res){
	//import_hs_path();

	//search_hs('Townsend');
	//search_hs('francis lewis');

	let hsname = 'bard high school early college', city = 'new york', state = 'ny';
	//let hsname = 'academic magnet high school', city = 'north charleston', state = 'sc';
	//let hsname = 'glendale high school', city = 'glendale', state = 'az';
	//let hsname = 'glenbrook south high school', city = 'glenview', state = 'il';
	//let hsname = 'brooklyn technical high school', city = 'brooklyn', state = 'ny';
	//let hsname = 'townsend harris high school', city = 'flushing', state = 'ny';
	let path = hsname.replace(/ /g, '-') + '-' + city.replace(/ /g, '-') + '-' + state;
	mongoClient.connect(mongodb, function(err, db) {
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('hs_mirrorPaths').findOne({path: path}, function(err, result){
			if(err) throw err;
			if(result != null) {
				find_similarhs(hsname, city, state, res);
				//scrapeHS(hsname, city, state);
			} else {
				console.log('Error: <'+toTitle(hsname)+'> not in highschools.txt');
			}
		});
	});

	//scrape_hs('townsend harris high school', 'flushing', 'ny');
	//scrape_hs('academic magnet high school', 'north charleston', 'sc');
	//console.log(toTitle('academic magnet HIgh SChool')+'|');
	//find_similarhs('academic magnet high school', 'north charleston', 'sc');
	//find_similarhs('glendale high school', 'glendale', 'az');
	//find_similarhs('glenbrook south high school', 'glenview', 'il');
	
	res.send('KO')
	//res.sendFile(__dirname + "login.html");
})

app.get('/hs/result', function(req, res){
	console.log(req.query.results);
	res.render('admin_scrape_result.ejs', {scrapedCollegeData: req.query.results});
});

function scrapeHS(hsname, city, state) {
	let hs_name = toTitle(hsname);
	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('high_school').findOne({name: hs_name}, function(err, result){
			if(err) throw err;
			if(result == null) {
				scrape_hs(hsname, city, state);
			} else {
				console.log('Scraped: HS <'+hs_name+'> found in db');
			}
		});
	});

}

function find_similarhs(hsname, city, state, res) {
	let hs_name = toTitle(hsname);

	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('high_school').findOne({name: hs_name}, function(err, result){
			if(err) throw err;
			if(result == null) {
				scrape_hs(hsname, city, state).then(function(response){
					console.log('completed scrape ---> calculating...');
					simhs_algo(result, res);
				});
			} else {
				console.log('find_similarhs(): HS <'+hs_name+'> found in db');
				//console.log(result);
				simhs_algo(result, res);
			}
		});
	});
}

function simhs_algo(hs_doc, res) {
	let hslist = [];
	let total_pt = {
		prof: 5,
		sat: 5,
		act: 5,
		grad: 5,
		ap: 3,
		size: 3
	}

	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('high_school').find({}).toArray(function(err, result){
			if(err) throw err;
			if(result != null) {
				let resultArr = [], arrlen = 0;
				for(let val of result) {
					if(val.name != hs_doc.name) {
						let obj = {
							data:  val,
							score: 0
						}

						// reading prof %
						obj.score += get_score(hs_doc.reading_prof, val.reading_prof, 0.1, 1-total_pt.prof);

						// math prof %
						obj.score += get_score(hs_doc.math_prof, val.math_prof, 0.1, 1-total_pt.prof);

						// grad rate
						obj.score += get_score(hs_doc.grad_rate, val.grad_rate, 0.1, 1-total_pt.grad);

						// ap enrollment %
						obj.score += get_score(hs_doc.ap_enroll, val.ap_enroll, 0.1, 1-total_pt.ap);

						// avg sat
						obj.score += get_score(hs_doc.avg_sat, val.avg_sat, 50, 1-total_pt.sat);
					
						// avg act
						obj.score += get_score(hs_doc.avg_act, val.avg_act, 3, 1-total_pt.act);

						// size
						obj.score += get_score(hs_doc.size, val.size, 500, 1-total_pt.size);
					
						// similar hs []
						if(hs_doc.similar_hs.indexOf(val.name) > -1) {
							obj.score += 0.5;
						}
						console.log(obj.score);
						hslist.push(obj);
					}
				}
				hslist.sort(compare);
				console.log('sending unsorted list to front end...');
				console.log(hslist);
				//res.render('admin_scrape_result.ejs', {results: hslist});
			}
		});
	});

}

function compare(a, b) {
	if(a.score < b.score) {
		return 1;
	} else {
		return -1;
	}
}

function get_score(f1, f2, range, bound) {
	let offset = Math.abs(f1 - f2);
	for(i=1; i>bound; i--) {
		offset -= range;
		if(offset <= 0 || i == bound+1) {
			return i;
		}
	}
}

// importing highschools.txt to db
function import_hs_path() {
	let f = fs.readFileSync('./tmp/highschools.txt', 'utf8');
	flines = f.split('\n');
	fsize = flines.length;

	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		for(let i=0; i<fsize; ++i) {
			//console.log(flines[i]);
			currentDB.collection('hs_mirrorPaths').findOne({path: flines[i]}, function(err, result){
				if(err) throw err;
				if(result == null) {
					currentDB.collection('hs_mirrorPaths').insertOne({path: flines[i]}, function(err, result){
						if(err) throw err;
						console.log('Added path to hs_mirrosPaths');
						console.log('\t'+result);
					});
				}
			});
		}
	});
}

async function scrape_hs(hsname, city, state) {
	let hs = {
		reading_prof: -1,
		math_prof: -1,
		grad_rate: -1,
		avg_sat: -1,
		avg_act: -1,
		ap_enroll: -1,
		size: -1,
		similar_hs: []
	}
	let hs_name = toTitle(hsname);
/*
	let found = false;

	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('high_school').find({name: hs_name}, function(err, result){
			if(err) throw err;
			if(result != null) {
				console.log('IF');
				found = true;
				return;
			} else {
				console.log('ELSE');
			}
		});
	});
	console.log(found);
	if(found) {
		console.log('returning...');
		return;
	} else {
		console.log('scraping...');
	}
*/
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();
	let path = hsname.replace(/ /g, '-') + '-' + city.replace(/ /g, '-') + '-' + state;
	console.log(nmirror_url + path);
	await page.goto(nmirror_url + path);
	const hs_content = await page.content();
	//console.log(hs_content);

/*	
	let path = hsname.replace(/ /g, '-') + '-' + city.replace(/ /g, '-') + '-' + state;
	const hs_content = await axios.get(nmirror_url + path);
*/
	const $ = cheerio.load(hs_content);

	// % reading proficient
	let rpstr = $('span:contains("Percent Proficient - Reading")').parent().siblings('div.scalar__value').find('span').text();
	if(rpstr != undefined) {
		rpstr = rpstr.replace('%', '');
		hs.reading_prof = parseInt(rpstr)/100;
		console.log('Reading Prof %: ' + hs.reading_prof);
	}

	// $ math proficient
	let mpstr = $('span:contains("Percent Proficient - Math")').parent().siblings('div.scalar__value').find('span').text();
	if(mpstr != undefined) {
		mpstr = mpstr.replace('%', '');
		hs.math_prof = parseInt(mpstr)/100;
		console.log('Math Prof %: ' + hs.math_prof);
	}

	// avg grad rate
	let grad_str = $('span:contains("Average Graduation Rate")').parent().siblings('div.scalar__value').find('span').text().replace('%', '');
	hs.grad_rate = parseInt(grad_str)/100;
	console.log(hs.grad_rate);

	// avg sat
	let sat = $('span:contains("Average SAT")').parent().siblings('div.scalar__value').text();
	if(sat != undefined) {
		sat = sat.replace($('span:contains("Average SAT")').parent().siblings('div.scalar__value').children().text(), '');
		hs.avg_sat = parseInt(sat);
	}

	// avg act
	let act = $('span:contains("Average ACT")').parent().siblings('div.scalar__value').text();
	if(act != undefined) {
		act = act.replace($('span:contains("Average ACT")').parent().siblings('div.scalar__value').children().text(), '');
		hs.avg_act = parseInt(act);
	}

	// % ap enrollment
	let ap_str = $('span:contains("AP Enrollment")').parent().siblings('div.scalar__value').text().replace('%', '');
	if(ap_str != undefined) {
		hs.ap_enroll = parseInt(ap_str)/100;
		console.log('AP Enrollment %: '+hs.ap_enroll);
	}

	// size
	let size_str = $('span:contains("Students")').parent().siblings('div.scalar__value').children().text();
	if(size_str != undefined) {
		hs.size = parseInt(size_str);
		console.log('Size: '+hs.size);
	}

	// similar hs
	hs.name = hs_name;
	$('div.similar-entities__title:contains("Schools like ' + hs_name +'")').siblings('ul.similar-entities').find('li').find('a.chip__name').each(function(index) {
		hs.similar_hs.push($(this).text());
		console.log($(this).text());
	});

	mongoClient.connect(mongodb, function(err, db){
		if(err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('high_school').insertOne(hs, function(err, result){
			if(err) throw err;
			if(result != null) {
				//console.log(result);
				console.log(hs);
			} else {
				console.log('Could not add');
			}
		});
	});
	console.log('Complete');
	return hs;
}

function toTitle(str) {
	let arr = str.split(' ');
	let result = '', x = '';
	for(let i=0; i<arr.length; i++) {
		x = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
		result += (x + ' ');
	}
	return result.trim();
}

async function search_hs(str) {
	var nbsp = String.fromCharCode(160);
	let sname_list = [];
	let sloc_list = [];
	let i = 1, pages = 1;

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();
	let s = str.replace(/ /g, '+');
	await page.goto(shs_url0 + s + shs_url1 + i);
	let shs_content = await page.content();
	let $ = cheerio.load(shs_content);
	
	let x = $('font > strong > font').first().text();
	if(x != '') {
		let y = x.split(nbsp);
		pages = parseInt(x[x.length-1]);
	}
	//console.log(i-1 + "-" + pages);
	
	do {
		$('font > a > strong').each(function(index) {
			sname_list.push($(this).text());
			let addr = $(this).parent().siblings('font').text();
			let a = addr.indexOf(',');
			let b = addr.lastIndexOf(nbsp);
			let c = addr.substring(a+2, b);
			sloc_list.push(c);
			//console.log(sname_list[sname_list.length -1] + "|" + c);
		});
		i++;
		await page.goto(shs_url0 + s + shs_url1 + i);
		shs_content = await page.content();
		$ = cheerio.load(shs_content);
	} while (i <= pages);
	//console.log('Completed');
}

async function scrape_colleges(res){
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

	let added = [], failed = [];
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
						//console.log(result);
					} else {
						console.log('Not Found');
					}
				});
				currentDB.collection('college').insertOne(college, function(err, result) {
					if (err) throw err;
					if (result != null) {
						added.push(college);
						//console.log(result);
					} else {
						console.log('Could not add');
					}
				});
			});
		} else {
			failed.push(cname);
			console.log('Error: Could not load <' + cname + '>');
		}
	}
	console.log('Done');
	res.render('admin_scrape_result.ejs', {results: added});
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
