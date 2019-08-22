var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/app/views');

app.use(express.static('./src/app/views/public'));

app.use(bodyParser.urlencoded({ extended: true }));

consign()
  .include('./src/app/routes')
  .then('./src/app/models')
  .then('./src/app/controllers')
  .into(app);

module.exports = app;
