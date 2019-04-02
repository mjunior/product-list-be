const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());



app.use(function(req, res, next) {
  res.status(404).json({error: 'Not found'});
  return false
});
module.exports = app;
