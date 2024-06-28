import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', photosMarkup);

const imageGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

// =========================DRAFT======================================

//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// https://simplelightbox.com/

// import { galleryItems } from "./gallery-items.js";

// const galleryEl = document.querySelector(".gallery");

// pentru galerie 
// galleryItems.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("gallery__item");
//   listItem.innerHTML = `<a class="gallery__link" href="${item.original}">
//   <img 
//       class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"/>
//     </a>
//   `;
//   galleryEl.append(listItem);
// });

// =========================DRAFT======================================

// object.onkeydown = function () {
//   myScript;
// };
// let msg = document.getDocumentById("#message");

// msg.addEventListener("keydown", (event) => {
//   // handle keydown
// });
