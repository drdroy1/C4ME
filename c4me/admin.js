const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";

app.get('', function(req, res){
        res.render('admin_index.ejs');
});

app.get('/view', function(req, res){
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		let result = currentDB.collection('decision').find({}).toArray();
		console.log(result)	
		res.end();
	});
});

app.delete('', function(req, res){
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		currentDB.collection('profile').remove({});
	});
});

app.listen(8082);
