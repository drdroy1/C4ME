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

app.get('', function(req, res){
	res.sendFile(__dirname + '/html/search_colleges.html');
});

app.post('', function(req, res) {
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
		let resultArr = {};
		currentDB.collection('college').find(query).toArray(function(err, result){
			if (err) throw err;
			if(result != null){
				let resultArr = []
				let count = 0
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
				for( let val of resultArr){
					let locationInfo = val.location.replace(/ /g, '')
					let locationList = locationInfo.split(',')
					let count = 0
					if(loc === 'Northeast'){
						if(northeast.includes(locationList[1])){
							console.log(val)	
						}
						count = count + 1
					}
					if(loc === 'Midwest'){
						if(midwest.includes(locationList[1])){
                                                        console.log(val)   
                                                }
                                                count = count + 1
					}
					if(loc === 'South'){
						if(south.includes(locationList[1])){
                                                        console.log(val)   
                                                }
                                                count = count + 1
					}
					if(loc === 'West'){
						if(west.includes(locationList[1])){
                                                        console.log(val)   
                                                }
                                                count = count + 1
					}
				}
			}
		});
		res.end()
	});
});

app.listen('8080');
