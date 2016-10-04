var express = require('express');
var router = express.Router();
var spells = require('../models/spells');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {title: 'Express'});
});

module.exports = router;
