var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var lineReader = require('line-reader');
var index = require('./routes/index');
var app = express();

//View engine setup
app.set('views', './views');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', index);

module.exports = app;
app.listen(5000);
