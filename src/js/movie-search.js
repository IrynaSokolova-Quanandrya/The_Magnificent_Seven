import {movieList, formRef} from '../js/refs/refs';
import DataBaseApi from './dataBaseApi.js';
import notification from './notification';
import createMovieGalleryMarkup from './change-data.js';

import pagination from '../js/pagination'



const debounce = require('lodash.debounce');
const dataBaseApi = new DataBaseApi();

export const onSearchResult = (e) => {
  e.preventDefault();
  dataBaseApi.request = formRef.value.trim();

  //console.log(dataBaseApi.request);

  if (!dataBaseApi.request) return;

  
  let promisMoviesArray = dataBaseApi.searchMovieFetch(dataBaseApi.request);

  promisMoviesArray
  .then(array=>{
    if (array.length === 0) {
      return notification.specifyRequest()
    }
    if (array.length >= 1) {
      movieList.innerHTML = '';
      createMovieGalleryMarkup(array);

      
   
      pagination.reset();


    }

  })
    .catch(() => {
      notification.criticalError();
    });
}
formRef.addEventListener('input', debounce(onSearchResult, 500));

