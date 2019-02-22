var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    //click an image an update its exact location
    attraction: String,
    // add any additional info about the city eg fav restaurants
    info: String
})


var citySchema = new Schema({
    loaction: String,
    imgs: [],
    destination: [destinationSchema],
});

module.exports = mongoose.model('City', citySchema);