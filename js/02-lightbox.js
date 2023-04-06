import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galeryEl = document.querySelector('.gallery');
for (const pic of galleryItems) {
  const item = `<a class="gallery__item" href="${pic.original}">
  <img class="gallery__image" src="${pic.preview}" alt="${pic.description}" />
</a>`;
  galeryEl.insertAdjacentHTML('beforeend', item);
}
// for (const pic of galleryItems) {
//   const item = `<a class="gallery__item" href="${pic.original}">
//   <img class="gallery__image" src="${pic.preview}" alt="${pic.description}" />
//   </a>`;
//   galeryEl.insertAdjacentHTML('beforeend', item);
// }
galeryEl.addEventListener('click', ev => {
  ev.preventDefault();
  if (ev.target.nodeName !== 'IMG') {
    return;
  }
  var lightbox = new SimpleLightbox('.gallery a', {
    /* options */ captionsData: 'alt',
    captionDelay: 250,
  });
});
