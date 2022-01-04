const params = new URLSearchParams(window.location.search);
const episodeParam = params.get('episode');
const htmlCharacterArray = [];
const characterParent = document.querySelector('.populate-chars')
const pageTitle = document.querySelector('h1');
const episodeTitle = document.querySelector('.title-div h3');
const seasonAndEpisode = document.querySelector('.title-div p');
const date = document.querySelector('.date');
const runtime = document.querySelector('.runtime');
const director = document.querySelector('.director');
const summary = document.querySelector('.summary p');
const epiImage = document.querySelector('.right-image img')

fetch(`http://localhost:3000/btas_api/v1/episodes/${episodeParam}`)
.then(res => res.json())
.then(episodeInfo => {
    pageTitle.innerHTML = episodeInfo.name.toLowerCase();
    episodeTitle.innerHTML = episodeInfo.name.toLowerCase();
    seasonAndEpisode.innerHTML = `season ${episodeInfo.season}, episode ${episodeInfo.episode}`
    runtime.innerHTML = `${episodeInfo.runtime} minutes`;
    director.innerHTML = `${episodeInfo.director.toLowerCase()}`;
    summary.innerHTML = episodeInfo.summary.toLowerCase();
    epiImage.setAttribute('src', episodeInfo.titleSplash);
    fetch(`http://localhost:3000/btas_api/v1/characters`)
    .then(res => res.json())
    .then(characters => {
        for (character of characters) {
            if (episodeInfo.characters.includes(character.id)) {
                htmlCharacterArray.push(`<div class="character-container">
                <img class="character-image" src="${character.portraitURL}">
                <div class="overlay">
                    <div class="text name">character: ${character.name.toLowerCase()}</div>
                    <div class="text VA">voice actor: ${character.VA.toLowerCase()}</div>
                </div>
            </div>`);
            }
        }
        characterParent.innerHTML = htmlCharacterArray.join('');
    });
});