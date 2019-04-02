var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const parseBreadcrumbResult = require('../helpers/parseBreadcrumbResult');
const parseSearchResult = require('../helpers/parseSearchResult');


// PATH: /items/:id
router.get('/', function(req, res, next) {
  fetch(`${process.env.API_BASE_URL}/sites/MLA/search?q=${req.params.q}`)
    .then(body => body.json())
    .then(body => parseSearchResult(body))
    .then(async(body) => await parseBreadcrumbResult(body) )
    .then(body => res.json(body))
});

// PATH: /items?search=xpto
router.get('/:id', function(req, res, next) {
  res.json({ search: req.params })
});



module.exports = router;