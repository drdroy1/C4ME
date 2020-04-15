const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');

const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";
const autoIncrement = require("mongodb-autoincrement");

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
		currentDB.collection('profile').findOne({ userId: req.session.userId }, function (err, result) {
			console.log('profile result is: ' + result)
			if (result) {
				console.log('dfad' + result.fName + 'dsads');
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
				res.render('student_profile.ejs',{
					lName: '',
                                        fName: '',
                                        age: '',
                                        email: '',
                                        home: '',
                                        mobile: '',
                                        currentSchool: '',
                                        gradYear: '',
                                        gpa: '',
                                        sat_math: '',
                                        sat_ebrw: '',
                                        act: ''
				});
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
							newArr[count] = val
							count = count + 1
						}
					}
					if (loc === 'Midwest') {
						if (midwest.includes(locationList[1])) {
							newArr[count] = val
							count = count + 1
						}
					}
					if (loc === 'South') {
						if (south.includes(locationList[1])) {
							newArr[count] = val
							count = count + 1;
						}
					}
					if (loc === 'West') {
						if (west.includes(locationList[1])) {
							newArr[count] = val
							count = count + 1;
						}
					}
				}
				autoIncrement.getNextSequence(currentDB, "resTable", function(err, autoIndex){
					let value = autoIndex.toString();
					currentDB.collection('resTable').insertOne({key: value, results: newArr})
					res.render('student_search_colleges_results.ejs', { results: newArr, key: value });
				})
			}
		});
	});
});

app.post('/edit', function (req, res) {
	console.log('Current editor ID: ' + req.session.userId);
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
		currentDB.collection('profile').update({userId: req.session.userId }, {$set: query}, {upsert: true})
		res.redirect('/student/profile');
		db.close();
	});
});

app.post('/compute/:key', function (req, res) {
	let username = req.session.userId;
	let key = req.params.key;
	let dict = {};
	let count = 0;

	console.log('computing recveied for user: ' + req.session.userId + ' with key ' + key)		

	mongoClient.connect(mongodb, function (err, db) {
		let currentDB = db.db('c4me')
		currentDB.collection('resTable').findOne({ key: key }, function (err, result) {
			let arr = result.results
			currentDB.collection('profile').findOne( { userId: username }, function(err, result){
				console.log('Gonna start with search results: ' + result)
				if(result){
					let score = 0
					let gpa = 0
					let sat_math = 0
					let sat_ebrw = 0
					let act = 0
					for( let val of arr){
						console.log(val.testscores.avg_gpa)
						score = 0
						gpa = val.testscores.avg_gpa
						sat_math = val.testscores.sat_math.lrange
						sat_ebrw = val.testscores.sat_ebrw.lrange
						act = val.testscores.act_composite.lrange
						if(gpa <= result.gpa){
							score = score + 1
						}
						if(act <= result.act){
                                                        score = score + 1
                                                }
						if(sat_math <= result.sat_math){
                                                        score = score + 1
                                                }
						if(sat_ebrw <= result.sat_ebrw){
                                                        score = score + 1
                                                }
						val.recommendationScore = score/4
						console.log(val.recommendationScore)
					}
					res.render('student_search_colleges_results_rec.ejs', {key: key, results: arr})
				}
			}); 
		});
	});
});

app.listen('8080');
