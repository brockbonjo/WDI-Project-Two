var City = require('../models/city');

module.exports = {
    create
};

function create(req, res) {
    City.findById(req.params.id, function(err, city){
        city.destination.push(req.body);
        city.save(function(err) {
            res.redirect(`/cities/${city._id}`);
        });
    });
}