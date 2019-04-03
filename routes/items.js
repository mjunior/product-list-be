const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const getBreadcrumb = require('../helpers/getBreadcrumb');
const parseSearchResult = require('../helpers/parseSearchResult');
const getDescriptionItem = require('../helpers/getDescriptionItem');
const parseItemResult = require('../helpers/parseItemResult');
const mostUsedCategory = require('../helpers/mostUserCategory');

const mergeData = async (originalData,key,value) => {
  originalData[key] = value
  return originalData
}

// PATH: /items?search=xpto
router.get('/', function(req, res, next) {
  console.log(req.params.q)
  fetch(`${process.env.API_BASE_URL}/sites/MLA/search?q=${req.query.q}`)
    .then(body => body.json())
    .then(body => parseSearchResult(body))
    .then(async (body) => await mergeData(body, 'categories', await getBreadcrumb(mostUsedCategory(body['categories']))))
    .then(body => res.json(body))
});

// PATH: /items/:id
router.get('/:id', function(req, res, next) {
  fetch(`${process.env.API_BASE_URL}/items/${req.params.id}`)
    .then(body => body.json())
    .then(body => parseItemResult((body)))
    .then(async(body) => await mergeData(body,'description', await getDescriptionItem(req.params.id)))
    .then(async (body) => await mergeData(body, 'categories', await getBreadcrumb(body['category_id'])))
    .then(body => res.json(body))
});

module.exports = router;