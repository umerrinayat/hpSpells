var express = require('express');
var router = express.Router();
var spells = require('../models/spells');
var config = require('../config');
var spellsRef = require('../models/spells.json');


var spellsObject = spellsRef.spells;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {title: 'Express', spells: spellsObject});
});

module.exports = router;


