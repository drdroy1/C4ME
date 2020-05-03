const express = require('express');
const session = require('express-session');
//const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const csvParser = require('csv-parser');
const fs = require('fs');

app.use(express.urlencoded({
	extended:true
}))

const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";

app.get('', function(req, res){
        res.render('admin_index.ejs');
});

app.post('/review', function(req, res){
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		let result = currentDB.collection('questions').find({}).toArray(function (err, result) {
			console.log(result);
			res.render('admin_students_questionable.ejs', {results: result});
		});
	});
});

app.get('/delete', function(req, res){
	res.render('admin_students.ejs');
});

app.post('/delete', function(req, res){
	console.log('deleting');
	mongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		let currentDB = db.db('c4me')
		currentDB.collection('profile').remove({});
	});
	res.render('admin_students.ejs');
});
var templateData = {}
function getCsv(file) {
	return new Promise(function (resolve, reject) {
		// var applicationsCsv = 'csv/applications-2.csv'
		// var studentCsv = 'csv/students-1.csv'
		var rows = []
		fs.createReadStream(file)
			.pipe(csvParser())
			.on('data', (row) => rows.push(row))
			.on('end', function () {
				resolve(rows)
			});
	})
}

app.get('/import', function (req, res) {
	getCsv('csv/applications-2.csv').then((data) => {
		templateData.applicationData = data;
		getCsv('csv/students-2.csv').then((data) => {
			templateData.studentData = data;
			console.log(templateData);
				res.render('admin_import_profile.ejs', { users: templateData });
		});

	});
});

app.post('/import', function (req, res) {
	console.log(req.body);
	//console.log(templateData);
	// {
	// 	res.render('admin_import_profile.ejs', { users: filterUsers , statuses: userAppsFiltered });
	// }
	// app.post('/tracker/list', function (req, res) {
	// 	res.render('student_applications_tracker_list.ejs', { users: filterUsers , statuses: userAppsFiltered });
	// 	});
	// app.post('/scatter', function (req, res) {
	// 	res.render('student_applications_tracker_list.ejs', { users: filterUsers , statuses: userAppsFiltered });
	// });
});

app.listen(3031);
