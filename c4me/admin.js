const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static('views'));
//app.use(express.static('css'));
//app.use(express.static('img'));
//app.use(express.static('js'));

app.get('', function(req, res){
        console.log('Hi')
        res.render('admin_index.ejs');
});

app.listen(8082);
