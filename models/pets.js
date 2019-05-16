const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String
});



module.exports = mongoose.model('Pet', petSchema)
