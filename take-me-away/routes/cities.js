var express = require('express');
var router = express.Router();
var citiesCtrl = require('../controllers/cities');


router.get('/new', citiesCtrl.new);
router.get('/:id', citiesCtrl.show);
router.put('/:id', citiesCtrl.update);


module.exports = router;