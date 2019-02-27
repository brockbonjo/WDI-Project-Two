const User = require('../models/user');
const City = require('../models/city');
const Destination = require('../models/destination');

module.exports = {
    index,
    createCity,

}

function index(req, res, next) {
    // console.log(req.user);
    req.user.populate("cities", function (err, user) {
        console.log(req.user.cities)
        req.user.cities.forEach(function(city){
            city.populate('destination', function (err, city){
                console.log(req.user.cities[0])
                console.log(req.user);
                res.render('users', {
                    user: req.user,
                    city
                    // name: req.query.name,
                });
        });

        })

        // City.findById(req.params.id, function (err, city) {
        //     console.log(req.params.id)
        //     city.populate("destination", function (err, c) {

        //         // console.log(req.param.id)
        //         // City.find({ destination: destination._id }, function (err, city) {
        //             res.render('users', {
        //                 user: req.user, city, c
        //             })
        //     })
        // })
    });

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

