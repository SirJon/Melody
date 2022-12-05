import { Popup } from "../../utils/Popup/Popup";
import { svgRecord } from "../../fileRecord/svgRecord";
import { nodePopupUserAgreement } from "../../content/popup/node/nodePopup";
import { sendRequest } from "../../utils/sendRequest/sendRequest";
import { store } from "../../redux/store";

const classPopup = `.popup--user-agreement`;
const ESC_KEY = 27;

export const popup = new Popup({
  selector: classPopup,
  overflow: false,
  node: nodePopupUserAgreement,
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

svgRecord({
  selector: `.popup__svg--close`,
  id: `popupClose`,
});

//Get request
const dirURL = '/dir.json';
sendRequest('GET', dirURL)
  .then(data => {
    const popupUrl = data.dir + "/database/popup/user-agreement.json";
    sendRequest('GET', popupUrl)
      .then(data => {

        const wrapper = mask.querySelector(`.popup__text`);
        const readAgreement = () => {
          wrapper.innerHTML = 
          data[localStorage.getItem(`language`)] == '' 
          ? data.ru
          : data[localStorage.getItem(`language`)];
        };
        readAgreement();
        
        store.subscribe(() => {
          if (store.getState() == `language`) {
            readAgreement();
          };
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });