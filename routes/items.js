const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const parseBreadcrumbResult = require('../helpers/parseBreadcrumbResult');
const parseSearchResult = require('../helpers/parseSearchResult');
const getDescriptionItem = require('../helpers/getDescriptionItem');
const parseItemResult = require('../helpers/parseItemResult');

// PATH: /items?search=xpto
router.get('/', function(req, res, next) {
  fetch(`${process.env.API_BASE_URL}/sites/MLA/search?q=${req.params.q}`)
    .then(body => body.json())
    .then(body => parseSearchResult(body))
    .then(async(body) => await parseBreadcrumbResult(body) )
    .then(body => res.json(body))
});


router.get('/:id', function(req, res, next) {
  fetch(`${process.env.API_BASE_URL}/items/${req.params.id}`)
    .then(body => body.json())
    .then(body => parseItemResult((body)))
    .then(async(body) => {
      description = await getDescriptionItem(req.params.id)
      body['description'] = description
      return body
    }).then(body => res.json(body))
});

module.exports = router;