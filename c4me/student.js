const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');

const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";

const northeast = ['ME', 'NH', 'VT', 'MA', 'CT', 'RI', 'NY', 'PA', 'NJ'];
const midwest = ['ND', 'MN', 'WI', 'MI', 'SD', 'IA', 'IL', 'IN', 'OH', 'NE', 'MO', 'KS'];
const west = ['WA', 'MT', 'OR', 'ID', 'WY', 'CA', 'NV', 'CO', 'UT', 'AZ', 'NM'];
const south = ['OK', 'AR', 'KY', 'WV', 'MD', 'DE', 'TX', 'LA', 'TN', 'DC', 'MS', 'AL', 'NC', 'GA', 'SC', 'FL'];
const pacific = ['HI', 'AK'];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	name: 'sid',
	resave: false,
	saveUninitialized: false,
	secret: 'key',
	cookie: {
		sameSite: true,
		secure: false
	}
}));

app.get('', function (req, res) {
	req.session.userId = req.query.sessionId;
	console.log('Set req session Id: ' + req.session.userId)
	res.render('student_index.ejs');
});

app.get('/search', function (req, res) {
	res.render('student_search_colleges.ejs');
});

app.get('/result', function (req, res) {
	for (let val of req.query.results) {
		console.log(val)
	}
	res.render('student_search_colleges_results.ejs', { newArr: req.query.results });
});

app.get('/profile', function (req, res) {
	mongoClient.connect(mongodb, function (err, db) {
		let currentDB = db.db('c4me')
		console.log(req.session.userId)
		currentDB.collection('profile').findOne({ userId: req.session.userId }, function (err, result) {
			console.log(result)
			if (result) {
				res.render('student_profile.ejs', { 
					lName: result.fName, 
					fName: result.lName, 
					age: result.age, 
					email: result.email,
					home: result.home,
					mobile: result.mobile,
					currentSchool: result.currentSchool,
					gradYear: result.gradYear,
					gpa: result.gpa,
					sat_math: result.sat_math,
					sat_ebrw: result.sat_ebrw,
					act: result.act
				});
			}
			else {
				res.render('student_profile.ejs');
			}
		})
	});
});

app.get('/edit', function (req, res) {
	res.render('student_profile_edit.ejs');
});

app.post('/search', function (req, res) {
	console.log(req.body)
	let cname = req.body.collegeName;
	let adminRate = parseInt(req.body.admimissionRate, 10);
	let cost = parseInt(req.body.cost, 10);
	let loc = req.body.loc;
	let size = parseInt(req.body.size, 10);
	let m1 = req.body.m1;
	let m2 = req.body.m2;
	let query = { size: { $gte: size } }
	//let query = {name: cname, size: { $gte: size }, admission:{percent:{$gte:adminRate}}}	

	if (cname !== '') {
		query.name = cname;
	}

	if (loc === '') {
		loc = 'Northeast';
	}

	if (m1 === '') {
		m1 = 'Computer Science'
	}

	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me');
		let resultArr = [];
		let newArr = []
		let count = 0

		currentDB.collection('college').find(query).toArray(function (err, result) {
			if (err) throw err;
			if (result != null) {
				console.log('adiaiojsjaido')
				for (let val of result) {
					let arr = []
					for (let v of val.majors) {
						arr = arr.concat(v.split('\n'))
					}
					val.majors = arr
					if (arr.includes(m1) || arr.includes(m2)) {
						resultArr[count] = val
						count = count + 1
					}
				}
				count = 0
				for (let val of resultArr) {
					let locationInfo = val.location.replace(/ /g, '')
					let locationList = locationInfo.split(',')
					if (loc === 'Northeast') {
						if (northeast.includes(locationList[1])) {
							console.log(val)
							newArr[count] = val
							count = count + 1
						}
					}
					if (loc === 'Midwest') {
						if (midwest.includes(locationList[1])) {
							console.log(val)
							newArr[count] = val
							count = count + 1
						}
					}
					if (loc === 'South') {
						if (south.includes(locationList[1])) {
							console.log(val)
							newArr[count] = val
							count = count + 1;
						}
					}
					if (loc === 'West') {
						if (west.includes(locationList[1])) {
							console.log(val)
							newArr[count] = val
							count = count + 1;
						}
					}
				}
				console.log('result array is : ' + newArr);
				for (let val of newArr) {
					console.log(val)
				}
				res.render('student_search_colleges_results.ejs', { results: newArr });
			}
		});
	});
});

app.post('/edit', function (req, res) {
	console.log('let me go');
	let fname = req.body.firstName;
	let lname = req.body.lastName;
	let age = req.body.age;
	let email = req.body.email;
	let homeP = req.body.home;
	let mobile = req.body.mobile;
	let school = req.body.currentSchool;
	let gyear = req.body.gradYear;
	let gpa = req.body.gpa;
	let satMath = req.body.sat_math;
	let satEBRW = req.body.sat_ebrw;
	let act = req.body.act;
	
	let query = {
		userId: req.session.userId,
		fName: fname,
		lName: lname,
		age: age,
		email: email,
		home: homeP,
		mobile: mobile,
		currentSchool: school,
		gradYear: gyear,
		gpa: gpa,
		sat_math: satMath, sat_ebrw: satEBRW, act: act
	}	

	mongoClient.connect(mongodb, function (err, db) {
		let currentDB = db.db('c4me')
		currentDB.collection('profile').findOneAndUpdate({userId: req.session.userId }, {$set: query})
		res.redirect('/student/profile');
		db.close();
	});
});

app.post('/compute', function (req, res) {
	let table = req.body.table;
	let username = req.session.userId;
	let dict = {};
	let count = 0;

	mongoClient.connect(mongodb, function (err, db) {
		let currentDB = db.db('c4me')
		currentDB.collection('account').findOne({ account: username }, function (err, result) {
			currentDB.collection('profile').findOne({ fName: result.fName, lName: result.lName }, function (err, result) {
				let gpa = result.gpa
				let math = result.math
				let read = result.reading
				let write = result.writing
				let score = 0;

				for (let val of table) {
					dict[val.collegeName] = score;
					score = 0
				}
			});
		});
	});
});

app.listen('8080');
