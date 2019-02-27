const User = require('../models/user');
const City = require('../models/city');
const Destination = require('../models/destination');

module.exports = {
    index,
    createCity,

}


function index(req, res, next) {
    req.user.
        populate({
            path: 'cities',
            populate: { path: 'destination' }
        }, function (err, result) {
            res.render('users', {
                user: result
            })
        })

};

function createCity(req, res) {
    City.create(req.body)
        .then(function (city) {
            req.user.cities.push(city._id);
            req.user.save(function (err) {
                res.redirect('/users');
            });
        })
};

