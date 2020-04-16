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

app.post('/review', function(req, res){
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		let result = currentDB.collection('decision').find({}).toArray();
		console.log(result)	
		res.render('');
	});
});

app.get('/delete', function(req, res){
	res.render('admin_students.ejs');
});

app.post('/delete', function(req, res){
	console.log('deleting my ass');
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		currentDB.collection('profile').remove({});
	});
	res.render('admin_students.ejs');
});

app.listen(8082);
