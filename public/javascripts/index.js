const gallery = document.querySelector('#gallery-container');

const imageArray = ['https://cdn.vox-cdn.com/thumbor/tD_pWUNNlxOiVH--Vl91Egs9cP8=/0x0:1200x924/1200x675/filters:focal(722x220:914x412)/cdn.vox-cdn.com/uploads/chorus_image/image/66588263/image001.0.jpg','https://s.yimg.com/os/creatr-uploaded-images/2021-05/50460070-b8ad-11eb-b5f7-b772e24f7fe9','https://www.denofgeek.com/wp-content/uploads/2017/10/batman-the-animated-series_0.jpg?fit=1400%2C700','https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/Batman-Animated-series-feature.jpg','https://assets1.ignimgs.com/2018/08/28/batmananimatedepisodes-1280-1504302044860-1280w-1535484334824_160w.jpg?width=1280','https://www.looper.com/img/gallery/the-best-batman-the-animated-series-episodes-according-to-imdb/l-intro-1637958708.jpg','https://www.joblo.com/wp-content/uploads/2021/07/batman-animated-series-1280x720.jpg','https://images.hdqwalls.com/wallpapers/batman-animated-series-artwork-dr.jpg','https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/1d/f6/46/1df646cd-5d56-4bdf-b989-08392a500339/pr_source.lsr/1200x675.jpg',]

const htmlImageArray = imageArray.map(image => `<div class="image-container">
<img class="gallery-image" src="${image}">
</div>`);

gallery.innerHTML = htmlImageArray.join('');