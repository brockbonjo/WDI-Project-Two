var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/', usersCtrl.index);
router.post('/', isLoggedIn, usersCtrl.createCity);

function isLoggedIn(req, res, next) {
  console.log('hitting2')
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
