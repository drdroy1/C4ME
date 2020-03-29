/** import modules 
 * require should be replaced with import following google js coding convention
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.send('OK')
	//res.sendFile(__dirname + "index.html")
})



app.listen(3000);
