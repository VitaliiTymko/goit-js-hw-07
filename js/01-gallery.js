import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = galleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function galleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <div class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
   </div>
    `;
    })
    .join("");
}

function blockStandartAction(event) {
  event.preventDefault();
}

function onGalleryContainerClick(event) {
  blockStandartAction(event);
// event.preventDefault();
console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG") {
    
    return;
  }
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

