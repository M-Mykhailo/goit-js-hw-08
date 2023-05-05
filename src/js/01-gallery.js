// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryItemMurkup = createGalleryItemMarkup(galleryItems);
const options = {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 350,
};

galleryList.insertAdjacentHTML('afterbegin', galleryItemMurkup);

function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
}

const galleryLightbox = new SimpleLightbox('.gallery .gallery__link', options);