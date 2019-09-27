var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
//Used for using ejs file in node
app.set('view engine','ejs');

//used for setting the directory
app.set('views','./views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({ secret: "String for encrypting cookies." }));


app.use('/', index);

module.exports = app;
app.listen(5000);
