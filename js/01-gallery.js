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

  function handleModalKeyDown(event) {
    if (event.key === 'Escape') {
      console.log('Listen');
      modal.close();
    }
  }
  
  const modal = basicLightbox.create(`<img src="${getImgURL(event)}">`, {
    onShow: (instance) => {
      window.addEventListener('keydown', handleModalKeyDown);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', handleModalKeyDown);
    },
  });
  modal.show();
}

function getImgURL(event) {
  event.preventDefault();

  return event.target.dataset.source;
}
