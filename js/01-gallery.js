import { galleryItems } from "./gallery-items.js";
//Change code below this line

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
  const itemList = `<li><a class="gallery__link" href="${original}" onclick="return false" ><img class = "gallery__image" src = '${preview}'  data-source ='${original}' alt = '${description}'></a></li>`;
  return itemList;
}

refs.galleryList.addEventListener('click', (e) => {
    if (e.target.nodeName === "UL") {
    return;
  }
  onClickImage(e);
 });

 
function onClickImage (e) { 
  const instance = basicLightbox.create(`
<img src="${e.target.dataset.source}">`)
instance.show()

refs.galleryList.addEventListener("keydown", (e) => {
if (e.code === "Escape") 
 instance.close()
}, {once: true})
};
