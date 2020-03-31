const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// scraping collegedata.com
const cd_base_url = 'http://www.collegedata.com/';

fs.readFile('./tmp/colleges.txt', (err, data) => {
	if(err) {
		console.error(err);
		return
	}
	console.log(data);
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

college.name = 'Stony-Brook-University';
const fetch_data = async function(){
        //let result = await axios.get('http://allv22.all.cs.stonybrook.edu/~stoller/cse416/collegedata/Stony-Brook-University/');
	let result = await axios.get(cd_base_url + '/college/' + college.name);
	//console.log(result.data);
        return cheerio.load(result.data);
};
	
	const $ = await fetch_data(); 
	console.log('Here: '+cd_base_url + '/college/' + college.name);
	// adminission info
	var adminStr = ($("dt:contains('Overall Admission Rate')").next().first().text()).split(' ');
	college.admission.percent = parseInt(adminStr[0].substring(0, adminStr[0].indexOf('%')))/100;
	console.log(college.admission.percent);
	college.admission.num = parseInt(adminStr[2].replace(/,/g, ''))*college.admission.percent;
	console.log(college.admission.num);
	// college Size
	college.size = parseInt($('div.d-inline-block.text-left > span.h2').text().replace(/,/g, ''));
	console.log(college.size);
	// standardize test score
	var gpa = $("dt:contains('Average GPA')").next().first().text();
	if(gpa != 'Not reported') {
		college.testscores.avg_gpa = parseFloat(gpa);
		console.log(college.testscores.avg_gpa);
	}
	
	var math = ($("dt:contains('SAT Math')").next().first().text()).trim();
	college.testscores.sat_math = parseTestscores(math);
	console.log('SAT Math: '+college.testscores.sat_math);
	
	var ebrw = ($("dt:contains('SAT EBRW')").next().first().text()).trim();
	college.testscores.sat_ebrw = parseTestscores(ebrw);
	console.log('SAT EBRW: '+college.testscores.sat_ebrw);

	var act = ($("dt:contains('ACT Composite')").next().first().text()).trim();
	college.testscores.act_composite = parseTestscores(act);
	console.log('ACT: '+college.testscores.act_composite);

	// cost
	var costStr = ($("dt:contains('Cost of Attendance')").next().first().text()).trim();
	console.log(costStr);
	if(costStr.indexOf('Out-of-state') > -1) {
		var costSplit = costStr.split('Out-of-state: ');

		college.cost.instate = parseInt(costSplit[0].substring(costSplit[0].indexOf('$')+1).replace(/,/g, ''));
		console.log('\tinstate: '+college.cost.instate);
		college.cost.outstate = parseInt(costSplit[1].substring(1).replace(/,/g, ''));
	} else {
		college.cost.gen = parseInt(costStr.substring(1).replace(/,/g, ''));
	}
	console.log('Cost: '+college.cost);

	// location
	college.location = $('#mainContent').next().text();
	console.log('Location: '+college.location);

	// majors
	
	var url_id = $("h2:contains('Academics')").next().next().attr('href');
	var path = $(url_id).attr('href');
	//console.log(path);
	const mresult = await axios.get(cd_base_url + path);
	const $0 = cheerio.load(mresult.data);
	$('h3:contains("Undergraduate Majors") ~ div.row > div.col-sm-6').each(function(){
		x = $(this).text();
		college.majors.push(x.trim());
	});
	console.log(college.majors);
}

function parseTestscores(str) {
	parsed = {
		avg: -1,
		lrange: -1,
		rrange: -1
	}
	if(str != 'Not reported') {
		strSplit = str.split(' average ');
		//console.log('strSplit: '+strSplit);
		//console.log('indexOf: '+str.indexOf(' average '));
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

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('', function(req, res){
	//console.log(cd_base_url+'Columbia-University');
	scrape();
	res.send('KO')
	//res.sendFile(__dirname + "login.html");
})

app.listen(8081);
