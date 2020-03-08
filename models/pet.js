const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: String,
    type: String,
    breed: String,
    location: String,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Pet', petSchema);