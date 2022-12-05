import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { nodePopupCertificate } from "../../content/popup/node/nodePopup";

import { imgRecord } from "../../fileRecord/imgRecord";
import { sendRequest } from "../../utils/sendRequest/sendRequest";

const classPopup = `.popup--certificate`;
const ESC_KEY = 27;

export const popup = new Popup({
  selector: classPopup,
  overflow: true,
  node: nodePopupCertificate,
});

popup.render();

const mask = document.querySelector(`${classPopup}`);
const buttonClose = mask.querySelector(`.popup__button--close`);

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

//Get request
const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const certificateUrl = data.dir + "/database/certificate.json";
    sendRequest('GET', certificateUrl)
      .then(data => {

        imgRecord({
          selector: `.js-popup__certificate`,
          img: data.certificate.table,
          picture: [data.certificate.desktop],
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });