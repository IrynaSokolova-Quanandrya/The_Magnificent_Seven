// import NProgress from 'nprogress';
import movieCardTpl from '../templates/movie-card.hbs';
import DataBaseApi from './dataBaseApi.js';
import genres from './genres.json';
// import { opts, spinner, target } from './spinner';
const movieList = document.querySelector('.page-film');
// console.log(movieList);
// console.log(genres);
const dataBaseApi = new DataBaseApi();
// console.log(dataBaseApi);
// console.log(dataBaseApi.homePageFetch());


function createMovieGalleryTpl() {
  // runs spinner
  // spinner.spin(target);
  //   =======================
  // NProgress.start();
  // NProgress.configure({ ease: 'ease', speed: 800 });
  // NProgress.configure({ trickleRate: 0.02, trickleSpeed: 500 });
  const results = dataBaseApi.homePageFetch();
  // console.log(results);
  results.then(array => {
    movieList.insertAdjacentHTML('beforeend', movieCardTpl(array));
    // NProgress.done();
    // stops spinner
    // spinner.stop();
    // ================
  });
  return;
}

createMovieGalleryTpl();

export { createMovieGalleryTpl };
