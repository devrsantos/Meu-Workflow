const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/app/views');

app.use(cors());
app.use(express.static('./src/app/views/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

consign()
  .include('./src/app/routes')
  .then('./src/app/models')
  .then('./src/app/controllers')
  .into(app);

module.exports = app;
