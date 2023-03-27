import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`;
    })
    .join('');
}

refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryMarkup(galleryItems));
refs.gallery.addEventListener('click', createGalleryModal);

function createGalleryModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modal.close();
    }
  });

  const modal = basicLightbox.create(`<img src="${getImgURL(event)}">`);
  modal.show();
}

function getImgURL(event) {
  event.preventDefault();

  return event.target.dataset.source;
}

