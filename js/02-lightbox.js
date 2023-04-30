import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector("ul.gallery"),
  lightbox: document.querySelector(".lightbox"),
  button: document.querySelector('[data-action="close-lightbox"]'),
};

const markUp = createImages(galleryItems);

refs.galleryList.innerHTML = markUp;

function createImages(images) {
  return images.reduce((acc, image) => (acc += createMarkup(image)), "");
}

function createMarkup({ preview, original, description }) {
  const itemList = `<li><a class="gallery__link" href="${original}" onclick="return false" ><img class = "gallery__image" src = '${preview}' alt = '${description}'></a></li>`;
  return itemList;
}

function onClickImage() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

onClickImage();
