const app = express();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";

const northeast = [ME, NH, VT, MA, CT, RI, NY, PA, NJ];
const midwest = [ND, MN, WI, MI, SD, IA, IL, IN, OH, NE, MO, KS];
const west = [WA, MT, OR, ID, WY, CA, NV, CO, UT, AZ, NM];
const south = [OK, AR, KY, WV, MD, DE, TX, LA, TN, DC, MS, AL, NC, GA, SC, FL];
const pacific = [HI, AK];

app.get('/search', function(req, res){
	res.sendFile(__dirname + '/html/search_college.html');
});

app.post('/search', function(req, res) {
	
	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		
	});
});

app.listen('3030');
