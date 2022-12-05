import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { imgRecord } from "../../fileRecord/imgRecord";
import { nodePopupEquipment } from "../../content/popup/node/nodePopup";

import im1 from "../../../assets/img/png/popup/R1300/im1.png";
import im2 from "../../../assets/img/png/popup/R1300/im2.png";
import im3 from "../../../assets/img/png/popup/R1300/im3.png";
import im4 from "../../../assets/img/png/popup/R1300/im4.png";
import im5 from "../../../assets/img/png/popup/R1300/im5.png";
import im6 from "../../../assets/img/png/popup/R1300/im6.png";
import { store } from "../../redux/store";
import { sendRequest } from "../../utils/sendRequest/sendRequest";
const classPopup = `.popup--equipment`;
const ESC_KEY = 27;

class Equipment extends Popup {

  openBasic() {
    this.open();
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.add(`equipment-popup--basic`);
    popup.classList.remove(`equipment-popup--option`);
  };
  openOption() {
    this.open();
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.remove(`equipment-popup--basic`);
    popup.classList.add(`equipment-popup--option`);
  };
  openFull() {
    this.open();
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.remove(`equipment-popup--basic`);
    popup.classList.remove(`equipment-popup--option`);
  };
}

export const popup = new Equipment({
  selector: classPopup,
  overflow: true,
  node: nodePopupEquipment,
});

popup.render();

const mask = document.querySelector(`${classPopup}`);
const buttonClose = mask.querySelector(`.equipment-popup__button--close`);

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
    e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`equipment-popup`))
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
  selector: `.equipment-popup__svg--close`,
  id: `popupClose`,
});

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const popupEquipment = data.dir + "/database/popup/popupEquipment.json";
    sendRequest('GET', popupEquipment)
      .then(data => {
        const changeImg = (data) => {
          imgRecord({
            selector: `.equipment-popup__img--installation`,
            img: data.mashine[sessionStorage.getItem(`mashine`)].mini,
          });
          imgRecord({
            selector: `.equipment-popup__img--control`,
            img: data.control.mini,
          });
          imgRecord({
            selector: `.equipment-popup__img--hose`,
            img: data.hose.mini,
          });
          imgRecord({
            selector: `.equipment-popup__img--pump`,
            img: data.pump.mini,
          });
          imgRecord({
            selector: `.equipment-popup__img--nozzles`,
            img: data.nozzle.mini,
          });
          imgRecord({
            selector: `.equipment-popup__img--scraper`,
            img: data.scraper.mini,
          });
        };
        changeImg(data);
        store.subscribe(() => {
          if (store.getState(`mshine`)) {
            changeImg(data);
          }
        })
      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });