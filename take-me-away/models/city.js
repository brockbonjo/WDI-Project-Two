var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
    location: {type: String, required: true},
    destination: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
});

module.exports = mongoose.model('City', citySchema);