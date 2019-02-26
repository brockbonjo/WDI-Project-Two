var City = require('../models/city');
var User = require('../models/user');

module.exports = {
    new: newCity,
    show,
}


function newCity(req, res) {
    City.find({}, function (err, cities) {
        // console.log(cities)
        res.render('cities/new', {
            user: req.user,
            title: 'Add City',
            cities
        });
    })
};

function show(req, res){
    City.findById(req.params.id, function(err, city){
        res.render('cities/show', {user: req.user, city})
    })
}

