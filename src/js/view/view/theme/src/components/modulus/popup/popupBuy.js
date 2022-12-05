import { nodePopupBuy } from "../../content/popup/node/nodePopup";
import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { store } from "../../redux/store";
import { sendRequest } from "../../utils/sendRequest/sendRequest";
import { popup as popupPrivacyPolicy } from "./popupPrivacyPolicy";
import { popup as popupUserAgreement } from "./popupUserAgreement";
import { sendMail } from "../../utils/sendMail/sendMail";
import { BASE, FULL, OPTIONS, RU } from "../../redux/utils/types";

const classPopup = `.popup--buy`;
const ESC_KEY = 27;

export const popup = new Popup({
  selector: classPopup,
  overflow: true,
  node: nodePopupBuy,
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



//Validate form and send mail
const validity = new InputmaskForm({
  selector: classPopup,
});
validity.clearInpits();

const itemsFrom = mask.querySelectorAll(`.popup__item`);
const removerValidate = () => {
  itemsFrom.forEach(it => {
    it.classList.remove(`item--not-valid-ru`);
    it.classList.remove(`item--not-valid-en`);
  });
};
itemsFrom.forEach(it => it.addEventListener(`click`, removerValidate));

const errorItem = () => {
  const inputs = validity.getStatusInput();
  inputs.forEach(it => {
    it.status === false ? it.el.parentNode.classList.add(`item--not-valid-${localStorage.getItem(`language`)}`) : null;
  });
};

const successSend = () => {
  popup.close();
  validity.clearInpits();
  buttonSubmit.disabled = true;
  removerValidate();
  localStorage.getItem(`language`) == RU
    ? alert("Спасибо, мы приняли Вашу заявку и скоро с Вами свяжемся")
    : alert("Thank you, we have accepted your application and will contact you shortly");
};

const onClickButtonSend = () => {
  if (validity.checkValidity() === true) {
    const value = validity.getValue();
    const mashine = sessionStorage.getItem(`mashine`);
    let option;
    switch (sessionStorage.getItem(`complect`)) {
      case BASE:
        option = `базовая комплектация`
        break;
      case OPTIONS:
        option = `Комплект влажного нанесения`
        break;
      case FULL:
        option = `+ комплект влажного нанесения`
        break;

      default:
        break;
    }
    const msg =
      `
      <h1 style="font-family: 'Verdana';">Зявка с сайта</h1>
      <div style="font-family: 'Verdana'; margin-left: 20px;">
        <div>Имя: <b>${value.name}</b></div>
        <div>Номер телефона:<b>${value.phone}</b></div>
        ${value.email ? `<div>Email: <b>${value.email}</b></div>` : ``} 
        ${value.company ? `<div>Company: <b>${value.company}</b></div>` : ``} 
        ${value.address ? `<div>Address: <b>${value.address}</b></div>` : ``} 
        <div>Хочет <b>заказать</b> 
        ${sessionStorage.getItem(`complect`) == OPTIONS
        ? `<b>комплект влажного нанесения</b>`
        : `установку <b>${mashine}</b> ${option}`
      }
        </div>
      </div>
      <hr>
      <div style="font-style: italic;">Заявка была сделана с <b>${localStorage.getItem(`language`) == RU ? `русской` : `английской`}</b> версии сайта</div>
    `;
    const data = new FormData();
    data.append(`msg`, msg);
    sendMail({
      data: data,
      responseOk: successSend(),
    });
  } else {
    errorItem();
  }
};
buttonSubmit.addEventListener(`click`, onClickButtonSend);



//Svg record
svgRecord({
  selector: `.popup__svg--close`,
  id: `popupClose`,
});
svgRecord({
  selector: `.popup__svg--checkbox`,
  id: `checkbox`,
});



//popup popupPrivacyPolicy
const buttonPrivacyPolicy = mask.querySelector(`.button--privacy-policy`);
const onClickPrivacyPolicy = () => {
  popupPrivacyPolicy.open();
};
buttonPrivacyPolicy.addEventListener(`click`, onClickPrivacyPolicy);

//popup popupUserAgreement
const buttonUserAgreement = mask.querySelector(`.button--user-agreement`);
const onClickUserAgreement = () => {
  popupUserAgreement.open();
};
buttonUserAgreement.addEventListener(`click`, onClickUserAgreement);



//Get request
const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const popupUrl = data.dir + "/database/popup/popupBuy.json";
    sendRequest('GET', popupUrl)
      .then(data => {

        const changePhoto = (data) => {
          const img = document.querySelector(`.credit-popup__img`);
          img.src = data[sessionStorage.getItem(`mashine`)][sessionStorage.getItem(`complect`)].mini;
        };
        const changeTitle = () => {
          const option = mask.querySelector(`.credit-popup__span--equipment`);
          const id = [...document.querySelectorAll(`.form__radio`)].find(it => it.checked == true).id;
          const currentOption = document.querySelector(`[for="${id}"]`).querySelector(`.form__span--label`);
          option.innerHTML = currentOption.outerHTML;

          const description = mask.querySelector(`.credit-popup__span--info`);
          const currentDescription = document.querySelector(`[data-input-id="${id}"]`);
          description.innerHTML = currentDescription.outerHTML;
        }
        const changeContent = (data) => {
          changePhoto(data);
          changeTitle()
        };

        changeContent(data);

        store.subscribe(() => {
          if (store.getState() == `mashine` || store.getState() == `complect`) {
            changeContent(data);
          };
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });