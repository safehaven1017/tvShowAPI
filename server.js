const e = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const tvShowData = require('./data')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Wordlies!');
});

// api instructions
app.get('/btas_api', (req, res) => {
    res.send(`Welcome to Rick's 'Batman: The Animated Series' API! This API contains basic information for season 1, episodes 1-7 of the show. You can add '/v1/episodes' at the end of this url to get information on all the episodes, and '/v1/characters' to get all the major character information for all the episodes. Lastly, add /{id #} to the end of both of these urls to fetch specific episode or character details.`);
});

// routes to get episodes
app.get('/btas_api/v1/episodes', (req, res) => {
    res.json(tvShowData.episodes);
});
app.get('/btas_api/v1/episodes/:id', (req, res) => {
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

// routes to get characters 
app.get('/btas_api/v1/characters', (req, res) => {
    res.json(tvShowData.characters);
});
app.get('/btas_api/v1/characters/:id', (req, res) => {
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

app.get('*', (req) => {
    res.status(404);
    res.send('404 page not found');
});

// listener
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
