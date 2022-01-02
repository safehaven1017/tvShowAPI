const gallery = document.querySelector('#gallery-container');

fetch('http://localhost:3000/btas_api/v1/characters')
.then(res => res.json())
.then(characters => {
    const htmlImageArray = characters.map(character => `<div class="character-container">
    <img class="character-image" src="${character.portraitURL}">
    <div class="overlay">
        <div class="text name">character: ${character.name.toLowerCase()}</div>
        <div class="text VA">voice actor: ${character.VA.toLowerCase()}</div>
    </div>
</div>`);

    gallery.innerHTML = htmlImageArray.join('');
});
