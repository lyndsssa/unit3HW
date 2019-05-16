const express = require('express')
const router = express.Router()

const Pet = require('../models/pets.js')

/////////INDEX route////////
router.get('/', (req, res) => {
  //res.send('index');
     Pets.find({}, (err, foundPets) => {
         res.json(foundPets)
    });
});

/////////CREATE route////////
router.post('/', (req, res) => {
    Pets.create(req.body, (err, createdPet) => {
        res.json(createdPet);
        console.log(createdPet)
    });
});






module.exports = router;
