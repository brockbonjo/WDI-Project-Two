var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: String
});

var destinationSchema = new Schema({
    images: {type: String, required: true},
    info: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Destination', destinationSchema);