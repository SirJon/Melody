import { render } from "../render/render.js";
import { svgRecord } from "../img/svgRecord";
import { popupConstructor } from "../popup/popupConstructor"
import { domPopupDeclaration } from "../popup/render/domPopupDeclaration";
import { sendRequest } from "../sendRequest/sendRequest.js";

const IMG_WIDTH = 1280;

const body = document.querySelector(`body`);
body.appendChild(domPopupDeclaration);

export const popup = new popupConstructor({
  selector: `.popup--declaration`,
  overflow: true,
});

const closeButton = document.querySelector(`.popup--declaration .popup__button--close`);
const mask = document.querySelector(`.popup--declaration`);

const onClickButtonClose = (e) => {
  e.preventDefault();
  popup.close();
};
const onClickEscClose = (e) => {
  if (mask.classList.contains(`popup--show`)) {
    if (e.keyCode === 27) {
      e.preventDefault();
      popup.close();
    };
  };
};
const onClickMaskClose = (e) => {
  if (mask.classList.contains(`popup--show`)) {
    e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`popup__content`))
      ? null
      : popup.close();
  };
};

window.addEventListener("keydown", onClickEscClose);
closeButton.addEventListener(`click`, onClickButtonClose);
mask.addEventListener(`click`, onClickMaskClose);

svgRecord({
  selector: `.popup__svg--close`,
  id: `closePopup`,
});

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const qualityURL = data.dir + "/database/quality.json"

    sendRequest('GET', qualityURL)
      .then(data => {
        const img = data.qualityStatement;
        const imgTag = (image) => { return (`<img class="popup__img--declaration" src="${image}" alt="">`) };
        const imgBox = mask.querySelector(`.popup__declaration`);
        img.forEach(it => {
          render(imgBox, `beforeend`, imgTag(window.innerWidth > IMG_WIDTH ? it.desktop : it.table))
        });
      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });
