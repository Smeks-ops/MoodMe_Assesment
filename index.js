/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const restaurant = require('./app/routes/restaurants');
const consola = require('consola');
require('dotenv').config();
require('./app/settings/settings');

const app = express();

const port = process.env.PORT || 8080;
const appName = process.env.APP_NAME;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(cors());
app.use(logger('dev'));
app.use(restaurant);

//Default route
app.get('/', (req, res) => {
  consola.info('Welcome to the moodme_assessment');
  res.sendFile(__dirname + "/postmanDoc.html");
});

//App Listen
app.listen(port, (res) => {
  consola.success(`${appName} is listening on ${port}`);
});

module.exports = app;
