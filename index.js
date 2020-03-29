/** import modules 
 *  require should be replaced with import following google js coding convention
 */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const redirectLogin = function(req, res, next){
	if(!req.session.userId){
		res.redirect('/login')
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
app.use(express.static('images'));

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

/** Handling HTTP get requests
 *  @params
 */
app.get('/', function(req,res){
	res.send('Waiting for a home page')
	//res.sendFile(__dirname + "index.html")
});
app.get('/login', function(req,res){
	res.send('Waiting for a login page')
	//res.sendFile(__dirname + "login.html")
});
app.get('/logout', function(req,res){
	res.send('LOGOUT PAGE')
});

app.listen(3000);
