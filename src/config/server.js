var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('./src/app/routes')
	.then('./src/app/models')
	.then('./src/app/controllers')
	.into(app);

module.exports = app;
