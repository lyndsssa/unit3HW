const mongoose = require('mongoose');

const petSchema =  mongoose.Schema({
    name: {type: String, required: true},
    img: [{type: String}]
});



module.exports = mongoose.model('Pet', petSchema)
