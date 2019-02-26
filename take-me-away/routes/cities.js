var express = require('express');
var router = express.Router();
var citiesCtrl = require('../controllers/cities');

router.get('/new', citiesCtrl.new);
router.get('/:id', citiesCtrl.show);


module.exports = router;