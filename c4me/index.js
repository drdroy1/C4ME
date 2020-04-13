/** import modules 
 *  require should be replaced with import following google js coding convention
 *  using express to initialize the app
 *  bodyParser in parsing req body
 *  fs reading in files, url formatting 
 */
const express = require('express');
const session = require('express-session');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const url = require('url');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const crypto = require('crypto');

/** initializing application
 *  msg to be delivered to the client
 */
const app = express();

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
 *  redirectition when conditions are not met
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
	res.render('index.ejs');
});

app.get('/register', function (req, res) {
	let err = req.query.error;
	if( err == undefined){
                err = {error: ''};
		res.render('register.ejs', {error: ''});
        }
	else{
		res.render('register.ejs', {error: err});
	}
});

app.get('/login', redirectAdmin, function (req, res) {
	let err = req.query.error;
	console.log(err);
	if( err == undefined){
		err = {error: ''};
		res.render('login.ejs', {error: ''});
	}
	else{
		res.render('login.ejs', {error: err});
	}
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
	let redirectMsg = '';
	let msg = '';

	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me')
		currentDB.collection('account').findOne({ username: username }, function (err, result) {
			if (result != null) {
				msg = 'Already Registerd. Please Login';
				redirectMsg = url.format({pathname: '/register', query: { error:msg}});
				res.redirect(redirectMsg);
			}
			else {
				let salt = crypto.randomBytes(Math.ceil(password.length/2)).toString('hex').slice(0,password.length);
				let sha256 = crypto.pbkdf2Sync(password, salt, 256, 32, 'sha256');
				let newUser = { username: username, password: sha256, salt: salt, fName: fName, lName: lName, userType: userType };
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
	let redirectMsg = '';
	let msg = '';

	mongoClient.connect(mongodb, function (err, db) {
		if (err) throw err;
		let currentDB = db.db('c4me');
		currentDB.collection('account').findOne({ username: username }, function (err, result) {
			if (err) throw err;
			if (result === null) {
				msg = 'User Not Found';
				redirectMsg = url.format({pathname: '/login', query: { error:msg}});
				res.redirect(redirectMsg);
			}
			else {
				let sha256 = crypto.pbkdf2Sync(password, result.salt, 256, 32, 'sha256');
				console.log(sha256.toString('hex'))
				console.log(result.password.toString('hex'))
				if (result.password.toString('hex') === sha256.toString('hex')) {
					req.session.userId = result.username;
					if (result.userType.toLowerCase() === 'administrator') {
						console.log('Redirect Login Admin');
						res.redirect('/admin');
					}
					else {
						console.log('Redirect Login Student');
						res.redirect('/student');
					}
				}
				else {
					msg = 'Invalid Username/Password';
					redirectMsg = url.format({pathname: '/login', query: { error:msg}});
					res.redirect(redirectMsg);
				}
			}
		});
	});
});

/*ANDREW'S JAVASCRIPT. TOUCH THIS AND YOU'RE DEAD TO*/

app.listen(3000);
