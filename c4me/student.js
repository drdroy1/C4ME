const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
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

app.get('', function(req,res){
	req.session.userId = req.query.sessionId;
	res.render('student_index.ejs');
});

app.get('/search', function(req, res){
	res.render('search_colleges.ejs');
});

app.get('/result', function(req, res){
	res.render('search_results.ejs', req.query.results);
}); 

app.get('/edit', function(req, res){
	res.render('edit_form.ejs');
});

app.post('/search', function(req, res) {
	console.log(req.body)
	let cname = req.body.collegeName;
	let adminRate = parseInt(req.body.admimissionRate, 10);
	let cost = parseInt(req.body.cost, 10);
	let loc = req.body.loc;
	let size = parseInt(req.body.size, 10);
	let m1 = req.body.m1;
	let m2 = req.body.m2;
	let query =  {size: {$gte: size}}
	//let query = {name: cname, size: { $gte: size }, admission:{percent:{$gte:adminRate}}}	
	
	if(cname !== ''){
		query.name = cname;
	}
	
	if(loc === ''){
		loc = 'Northeast';
	}
	
	if(m1 === ''){
		m1 = 'Computer Science'
	}

	console.log(loc);
		
	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me');
		let resultArr = [];
		let newArr = []
		let count = 0

		currentDB.collection('college').find(query).toArray(function(err, result){
			if (err) throw err;
			if(result != null){
				for( let val of result){
					let arr = []
					for( let v of val.majors){
						arr = arr.concat(v.split('\n'))
					}
					val.majors = arr
					if(arr.includes(m1)||arr.includes(m2)){
						resultArr[count] = val
						count = count + 1
					}
				}
				count = 0
				for( let val of resultArr){
					let locationInfo = val.location.replace(/ /g, '')
					let locationList = locationInfo.split(',')
					if(loc === 'Northeast'){
						if(northeast.includes(locationList[1])){
							newArr[count] = val
						}
					}
					if(loc === 'Midwest'){
						if(midwest.includes(locationList[1])){
                                                        newArr[count] = val
                                                }
					}
					if(loc === 'South'){
						if(south.includes(locationList[1])){
                                                        newArr[count] = val
                                                }
					}
					if(loc === 'West'){
						if(west.includes(locationList[1])){
                                                        newArr[count] = val  
                                                }
					}
					count = count + 1
				}
			}
		});
		let redirect = url.format({pathname: '/student/result', query: {results: newArr}});
		res.redirect(redirect);
	});
});

app.post('/edit', function(req, res){
	let fname = req.body.firstName;
	let lname = req.body.lastName;
	mongoClient.connect(mongodb, function(err, db){
		let currentDB = db.db('c4me')
		currentDB.collection('profile').findOne({ fName: fname, lName: lname}, function(err, result){
			if(result != null){
				let query = {}
				currentDB.collection('profile').updateOne({ fName: fname, lName: lname}, {$set: query})
			}
		});
		db.close();
	});
});

app.post('/compute', function(req, res){
	let table = req.body.table;
	let username = req.session.userId;
	let dict = {};
	let count = 0;	
	
	mongoClient.connect(mongodb, function(err, db){
		let currentDB = db.db('c4me')
		currentDB.collection('account').findOne({ account: username}, function(err, result){
			currentDB.collection('profile').findOne({ fName: result.fName, lName: result.lName}, function(err, result){
				let gpa = result.gpa
				let math = result.math
				let read = result.reading
				let write = result.writing
				let score = 0;

				for( let val of table){
					dict[val.collegeName] = score;
					score = 0 			
				}
			});
		});
	});
});

app.listen('8080');
