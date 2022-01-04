const express = require('express');
const router = express.Router();
const tvShowData = require('../data')

// routes to get characters 
router.get('/', (req, res) => {
    res.json(tvShowData.characters);
});
router.get('/:id', (req, res) => {
    const fetchedCharacter = tvShowData.characters.find(character => {
        return character.id == req.params.id;
    });

    if (fetchedCharacter) {
        res.json(fetchedCharacter);
    } else {
        res.status(404);
        res.send(`404 page not found, character doesn't exist or improper URL.`);
    }
});

module.exports = router;