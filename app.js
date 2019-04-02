require('dotenv').config()
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const itemsRouter = require('./routes/items');
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/items', itemsRouter);

app.use(function(req, res, next) {
  res.status(404).json({error: 'Not found'});
  return false
});
module.exports = app;
