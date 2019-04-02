const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json("It's alive");
});

module.exports = router;
