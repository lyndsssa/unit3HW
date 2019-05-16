const express = require('express')
const router = express.Router()

const Pets = require('../models/pets.js')

/////////INDEX route////////
router.get('/', (req, res) => {
  //res.send('index');
     Pets.find({}, (err, foundPets) => {
         res.json(foundPets)
    });
});



///////DELETE Route///////

//DELETE Route


router.delete('/:id', (req, res) => {
    Pets.findByIdAndRemove(req.params.id, (err, deletedPets) => {
        res.json(deletedPets);
    });
});



//CREATE route//


/////////CREATE route////////

router.post('/', (req, res) => {
    Pets.create(req.body, (err, createdPets) => {
        res.json(createdPets);
        console.log(createdPets)
    });
});

/////// PUT Route //////
router.put('/:id', (req, res) => {
    Pets.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPets) => {
        res.json(updatedPets);
    });
});



module.exports = router;
