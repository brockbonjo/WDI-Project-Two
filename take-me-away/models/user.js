var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    cities: [{type: Schema.Types.ObjectId, ref: 'City'}]
});

module.exports = mongoose.model('User', userSchema);