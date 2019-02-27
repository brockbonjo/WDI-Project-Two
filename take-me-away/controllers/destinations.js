var City = require('../models/city');
var Destination = require('../models/destination');

module.exports = {
    create
};

function create(req, res) {
    City.findById(req.params.id, function(err, city){
    Destination.create(req.body)
        .then(function (destination) {
            city.destination.push(destination._id);
            city.save(function (err) {
                res.redirect(`/cities/${city._id}`);
            });
        })
    });
};

