import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { nodePopupVideo } from "../../content/popup/node/nodePopup";

const classPopup = `.popup--video`;
const ESC_KEY = 27;

class Video extends Popup {
  videoRecord(node) {
    const popup = document.querySelector(`${this.selector}`);
    const iframe = popup.querySelector(`.popup__iframe`);
    iframe.src = `https://www.youtube.com/embed/${node.dataset.video}${node.dataset.start !== '' ? `?start=${node.dataset.start}` : ``}${node.dataset.end !== '' ? `&end=${node.dataset.end}` : ``}`;
  }

  close() {
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.remove(`${this.classShow}`);
    this.overflow === true ? this.page.unLock() : null;

    const iframe = popup.querySelector(`.popup__iframe`);
    iframe.src = ``;
  }  
}

export const popup = new Video({
  selector: classPopup,
  overflow: true,
  node: nodePopupVideo,
});

popup.render();

const mask = document.querySelector(`${classPopup}`);
const buttonClose = mask.querySelector(`.popup__button--close`);
const buttonSubmit = mask.querySelector(`.popup__button`);

const onClickButtonClose = (e) => {
  e.preventDefault();
  popup.close();
};
const onClickEscClose = (e) => {
  if (e.keyCode === ESC_KEY) {
    e.preventDefault();
    popup.close();
  };
};
const onClickMaskClose = (e) => {
  if (mask.classList.contains(`popup--show`)) {
    e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`popup__conteiner`))
      ? null
      : popup.close();
  };
};

window.addEventListener("keydown", onClickEscClose);
buttonClose.addEventListener(`click`, onClickButtonClose);
mask.addEventListener(`click`, onClickMaskClose);

const validity = new InputmaskForm({
  selector: classPopup,
});

svgRecord({
  selector: `.popup__svg--close`,
  id: `popupClose`,
});
svgRecord({
  selector: `.popup__svg--checkbox`,
  id: `checkbox`,
});