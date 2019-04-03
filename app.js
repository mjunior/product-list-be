require('dotenv').config()
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const itemsRouter = require('./routes/items');
const app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});
app.use(logger('dev'));
app.use(express.json());

app.use('/api/', indexRouter);
app.use('/api/items', itemsRouter);

app.use(function(req, res, next) {
  res.status(404).json({error: 'Not found'});
  return false
});
module.exports = app;
