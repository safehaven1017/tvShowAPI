const e = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const episodesRouter = require('./routes/episodesRouter')
const charactersRouter = require('./routes/charactersRouter')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Wordlies!');
});

// api instructions
app.get('/btas_api', (req, res) => {
    res.send(`Welcome to Rick's 'Batman: The Animated Series' API! This API contains basic information for season 1, episodes 1-7 of the show. You can add '/v1/episodes' at the end of this url to get information on all the episodes, and '/v1/characters' to get all the major character information for all the episodes. Lastly, add /{id #} to the end of both of these urls to fetch specific episode or character details.`);
});

app.use('/btas_api/v1/episodes', episodesRouter);
app.use('/btas_api/v1/characters', charactersRouter);

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 page not found');
});

// listener
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
