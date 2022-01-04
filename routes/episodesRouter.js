const express = require('express');
const router = express.Router();
const tvShowData = require('../data')

router.get('/', (req, res) => {
    res.json(tvShowData.episodes);
});
router.get('/:id', (req, res) => {
    const fetchedEpisode = tvShowData.episodes.find(episode => {
        return episode.id == req.params.id;
    });

    if (fetchedEpisode) {
        res.json(fetchedEpisode);
    } else {
        res.status(404);
        res.send(`404 page not found, episode doesn't exist or improper URL.`);
    }
    res.json(tvShowData.episodes);
});

module.exports = router;