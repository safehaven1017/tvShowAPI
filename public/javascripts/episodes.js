const gallery = document.querySelector('#gallery-container');

fetch('http://localhost:3000/btas_api/v1/episodes')
.then(res => res.json())
.then(episodes => {
    const htmlImageArray = episodes.map(episode => {
        return `<a href="http://localhost:3000/episode.html?episode=${episode.id}"><div class="episode-container">
        <div class="splash-container">
            <img class="episode-image" src="${episode.titleSplash}">
            <div class="shadow"></div>
        </div>
        <div class="details-container">
            <p class="episode-title">${episode.name.toLowerCase()}</p>
            <p class="episode-summary">${episode.summary.toLowerCase()}</p>
        </div>
        </div>`;
    });
    gallery.innerHTML = htmlImageArray.join('');
});
