var City = require('../models/city');
var User = require('../models/user');

module.exports = {
    new: newCity,
    show,
}


function newCity(req, res) {
    City.find({}, function (err, cities) {
        res.render('cities/new', {
            user: req.user,
            title: 'Add City',
            cities
        });
    })
};

function show(req, res){
    City.findById(req.params.id, function(err, city){
        city.populate("destination", function (err, c){
            res.render('cities/show', {user: req.user, city, c})
        })
    })
}
