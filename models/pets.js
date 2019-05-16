const mongoose = require('mongoose');
const Pets = mongoose.model('Pet', petSchema);

const petSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: []{type: String}]
});



module.exports = Pets;
