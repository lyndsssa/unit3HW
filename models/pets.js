const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: [{type: String}]
});



module.exports = mongoose.model('Pet', petSchema)
