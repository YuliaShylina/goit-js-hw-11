import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const formEl = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.search.value.trim();

  loaderEl.classList.remove('is-hidden');
  galleryList.innerHTML = '';

  fetchPhotos(inputValue)
    .then(response => {
      if (inputValue === '' || response.hits.length === 0) {
        return iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          position: 'topRight',
          timeout: 4000,
        });
      }
      galleryList.innerHTML = createGallery(response.hits);
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}
