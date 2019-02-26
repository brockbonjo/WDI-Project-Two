var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.post('/cities/:id/destinations', destinationsCtrl.create);

module.exports = router;