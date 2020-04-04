/** import modules 
 *  require should be replaced with import following google js coding convention
 */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

/** initializing application
 *  msg to be delivered to the client
 */
const app = express();
var msg = ' ';

/** constants
 *
 */
const TWO_HOURS = 100 * 60 * 60 * 2;

/** import mongodb module
 *  setting up mongo client for future connection
 *  audoIndex used to index each entry
 */
const mongoClient = require('mongodb').MongoClient;
const mongodb = "mongodb://localhost:27017/";
const autoIndex = require('mongodb-autoincrement');

/** additional functions
 *  redirect login and home page
 */
const redirectLogin = function (req, res, next) {
	if (!req.session.userId) {
		res.redirect('/login');
	}
	else {
		next();
	}
};

const redirectAdmin = function (req, res, next) {
	if (req.session.userId) {
		res.redirect('/admin');
	}
	else {
		next();
	}
};

/** additional functionality to app
 *  app.use()
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views'));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));

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

/** Handling HTTP GET request
 *  @params
 */
app.get('/', redirectAdmin, function (req, res) {
	//res.sendFile(__dirname + '/html/index.html');
	res.render('index.ejs', {error: msg});
});

app.get('/register', function (req, res) {
	//res.sendFile(__dirname + '/html/register1.html');
	res.render('register.ejs', {error: msg});
});

app.get('/login', redirectAdmin, function (req, res) {
	//res.sendFile(__dirname + '/html/login.html');
	console.log('Messages: '+msg);
	res.render('login.ejs', {error: msg});
});

app.get('/admin', redirectLogin, function (req, res) {
	//res.sendFile(__dirname + '/html/admin_index.html');
	res.render('admin_index.ejs');
});

app.get('/logout', function (req, res) {
	console.log(req.session);
	if (req.session != null) {
		mongoClient.connect(mongodb, function (err, db) {
			req.session.destroy();
			res.redirect('/login');
		});
	}
});

app.get('/js/script.js', function(req, res){
	let fileContents = fs.readFileSync('js/script.js', { encoding: 'utf8' });
	res.write(fileContents);
	res.end()
});

app.get('/css/style.css', function (req, res) {
	res.writeHead(200, { 'Content-type': 'text/css' });
	let fileContents = fs.readFileSync('css/style.css', { encoding: 'utf8' });
	res.write(fileContents);
	res.end();
});

app.get('/img/:path', function (req, res) {
	let filePath = path.join('img/' + req.params.path);
	let fileContents = fs.readFileSync(filePath);
	res.write(fileContents)
	res.end()
});

/** Handling HTTP POST request
 *
 */

app.post('/register', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	let fName = req.body.firstName;
	let lName = req.body.lastName;
	let userType = req.body.userType;
	let msg = '';
	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me')
		currentDB.collection('account').findOne({ username: username }, function (err, result) {
			if (result != null) {
				console.log("Someone with that username already exists");
				msg = 'Already Registerd. Please Login';
				res.redirect('/login');
			}
			else {
				let newUser = { username: username, password: password, fName: fName, lName: lName, userType: userType };
				currentDB.collection('account').insertOne(newUser, function (err, result) {
					if (err) throw err;
					console.log(newUser)
					res.redirect('/login');
				});
			}
		});
	});
});

app.post('/login', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	let msg = '';
	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		console.log('Connected to MongoDB');
		let currentDB = db.db('c4me');
		currentDB.collection('account').findOne({ username: username }, function (err, result) {
			if (err) throw err;
			console.log('retrieving login info');
			if (result === null) {
				msg = 'User Not Found';
				console.log('User Not Found with written msg: ' + msg);
				msg = 'User Not Found';
				res.redirect('/login');
			}
			else {
				console.log('User Found');
				if (result.password === password) {
					req.session.userId = result.username;
					if (result.userType.toLowerCase() === 'administrator') {
						res.redirect('/admin');
					}
					else {
						res.redirect('/student');
					}
				}
				else {
					console.log('Incorrect Password');
					msg = 'Invalid Username/Password';
					res.redirect('/login');
				}
			}
		});
	});
});

/*ANDREW'S JAVASCRIPT. TOUCH THIS AND YOU'RE DEAD TO*/

app.listen(3000);
