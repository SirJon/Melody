import { svgRecord } from "../img/svgRecord";
import { domPopupVideo } from "../popup/render/domPopupVideo";
import { popupConstructor } from "../popup/popupConstructor";

const body = document.querySelector(`body`);
body.appendChild(domPopupVideo);

export const popup = new popupConstructor({
  selector: `.popup--video`,
  overflow: true,
});

const closeButton = document.querySelector(`.popup--video .popup__button--close`);
const mask = document.querySelector(`.popup--video`);

const onClickButtonClose = (e) => {
  e.preventDefault();
  const iframeYouTube = document.querySelector(`.popup__iframe--youtube`);
  iframeYouTube.src = ``;
  popup.close();
};
const onClickEscClose = (e) => {
  if (e.keyCode === 27) {
    e.preventDefault();
    const iframeYouTube = document.querySelector(`.popup__iframe--youtube`);
    iframeYouTube.src = ``;
    popup.close();
  };
};
const onClickMaskClose = (e) => {
  e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`popup__content`))
    ? null
    : popup.close();
};

window.addEventListener("keydown", onClickEscClose);
closeButton.addEventListener(`click`, onClickButtonClose);
mask.addEventListener(`click`, onClickMaskClose);
svgRecord({
  selector: `.popup--video .popup__svg--close`,
  id: `closePopup`,
});