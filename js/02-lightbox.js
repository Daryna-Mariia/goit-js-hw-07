import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    gallery: document.querySelector('.gallery'),
  };
  
  function makeGalleryMarkup(arr) {
    return arr
      .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            alt='${description}'
          />
        </a>`;
      })
      .join('');
  }
  
  refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryMarkup(galleryItems));
  
  let gallery = new SimpleLightbox('.gallery a');
  
  gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250;
    gallery.options.captionsData = 'alt';
  });
  