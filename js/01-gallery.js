import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryEl = document.querySelector('.gallery');
for (const pic of galleryItems) {
  const item = `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${pic.preview}"
          data-source="${pic.original}"
          alt="${pic.description}"
        />
      </a>
    </div>`;
  galeryEl.insertAdjacentHTML('beforeend', item);
}
galeryEl.addEventListener('click', ev => {
  ev.preventDefault();
  if (ev.target.nodeName !== 'IMG') {
    return;
  }
  const popUpPic = basicLightbox.create(`<img src="${ev.target.dataset.source}">`);
  popUpPic.show();
});
