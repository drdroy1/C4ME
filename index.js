/** import modules 
 *  require should be replaced with import following google js coding convention
 */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

/** import mongodb module
 *  setting up mongo client for future connection
 *  audoIndex used to index each entry
 */
const mongoClient = require('mongodb').MongoClient;
const mongo = "mongodb://localhost:27017/";
const autoIndex = require("mongodb-autoincrement");

/** additional functions
 *  redirect login and home page
 */
const redirectLogin = function(req, res, next){
	if(!req.session.userId){
		res.redirect('/login');
	}
	else{
		next();
	}
};

const redirectHome = function(req, res, next){
	if(!req.session.userId){
		res.redirect('');
	}
	else{
		next();
	}
};

/** additional functionality to app
 *  app.use()
 */
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static('css'));
app.use(express.static('img'));

app.use(session({
	name: 'sid',
	resave: false,
	saveUninitialized: false,
	secret: 'key',
	cookie:{
		sameSite: true,
		secure: false
	}
}));

/** Handling HTTP GET request
 *  @params
 */
app.get('/', function(req, res){
	res.sendFile(__dirname + "/html/index.html");
});

app.get('/register', function(req, res){
	res.sendFile(__dirname + '/html/register1.html');
});

app.get('/login', function(req, res){
	res.sendFile(__dirname + "/html/login.html")
});

app.get('/logout', function(req, res){
	res.send('LOGOUT PAGE')
});

app.get('/css/style.css', function(req, res){
	res.writeHead(200,{'Content-type' : 'text/css'});
        let fileContents = fs.readFileSync('css/style.css', {encoding: 'utf8'});
        res.write(fileContents);
        res.end();
});

app.get('/img/:path', function(req, res){
	let filePath = path.join( 'img/' + req.params.path);
	console.log(filePath)
	let fileContents = fs.readFileSync(filePath);
	res.write(fileContents)
	res.end()
});

/** Handling HTTP POST request
 *
 */

app.post('/login', redirectHome, function(req, res){
	let username = req.body.username;
	let password = req.body.password;
	let msg = '';
	MongoClient.connect(mongodb, function(err, db){
		if (err) throw err;
		console.log("Connected to MongoDB");
		let currentDB = db.db("c4me");
		currentDB.collection("account").findOne({username:username}, function(err, result){
			if (err) throw err;
			console.log("retrieving login info");
			if(result === null){
				console.log('User Not Found');
				msg = 'User Not Found';
				res.redirect('/login');
			}
			else{
				console.log('User Found');
				if(result.password === password){
					req.session.userId = result.username;
					msg = '';
					if(result.authorized){
						res.redirect('/admin');
					}
					else{
						res.redirect('/student');
					}
				}
				else{
					console.log('Incorrect Password');
					msg = 'Invalid Username/Password';
					res.redirect('/login');
				}
			}
		});
	});
});

app.listen(3000);
