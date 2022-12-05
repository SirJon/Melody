import { Popup } from "../../utils/Popup/Popup";
import { svgRecord } from "../../fileRecord/svgRecord";
import { nodePopupPrivacyPolicy } from "../../content/popup/node/nodePopup";
import { sendRequest } from "../../utils/sendRequest/sendRequest";
import { store } from "../../redux/store";

const classPopup = `.popup--privacy-policy`;
const ESC_KEY = 27;

export const popup = new Popup({
  selector: classPopup,
  overflow: false,
  node: nodePopupPrivacyPolicy,
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
    const popupUrl = data.dir + "/database/popup/privacy-policy.json";
    sendRequest('GET', popupUrl)
      .then(data => {

        const wrapper = mask.querySelector(`.popup__text`);
        const readPrivacy = () => {
          wrapper.innerHTML = 
          data[localStorage.getItem(`language`)] == '' 
          ? data.ru
          : data[localStorage.getItem(`language`)];
        };
        readPrivacy();
        
        store.subscribe(() => {
          if (store.getState() == `language`) {
            readPrivacy();
          };
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });