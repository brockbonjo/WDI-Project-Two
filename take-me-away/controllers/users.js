const User = require('../models/user');
const City = require('../models/city');

module.exports = {
    index,
    createCity,

}

function index(req, res, next) {
    console.log(req.user);
    req.user.populate("cities", function (err, user) {
        console.log("cities");
        res.render('users', {
            user: req.user,
            // name: req.query.name,
        });
    });

};

function createCity(req, res) {
    City.create(req.body)
        .then(function (city) {
            console.log(req.body)
            req.user.cities.push(city._id);
            req.user.save(function (err) {
                console.log(req.user);
                res.redirect('/users');
            });
        })
};

