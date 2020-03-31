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

app.get('/search', function(req, res){
	res.sendFile(__dirname + '/html/search_college.html');
});

app.post('/search', function(req, res) {
	let cname = req.body.collegeName;
	let adminRate = req.body.admimissionRate;
	let cost = req.body.cost;
	let loc = req.body.loc;
	let size = req.body.size;
	let m1 = req.body.m1;
	let m2 = req.body.m2;
	
	let query = {cname: cname, size: { $gte: size }, admission:{percent:{$gte:adminRate}}}

	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('college').find(query).toArray(function(err, result){
			if (err) throw err;
			console.log(result)
		});
	});
});

app.listen('8080');
