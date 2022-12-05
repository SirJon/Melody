import { nodePopupPartner } from "../../content/popup/node/nodePopup";
import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { popup as popupPrivacyPolicy } from "./popupPrivacyPolicy";
import { popup as popupUserAgreement } from "./popupUserAgreement";
import { sendMail } from "../../utils/sendMail/sendMail";
import { RU } from "../../redux/utils/types";

const classPopup = `.popup--partner`;
const ESC_KEY = 27;

export const popup = new Popup({
  selector: classPopup,
  overflow: true,
  node: nodePopupPartner,
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
    const msg =
      `
      <h1 style="font-family: 'Verdana';">Зявка с сайта</h1>
      <div style="font-family: 'Verdana'; margin-left: 20px;">
        <div>Имя: <b>${value.name}</b></div>
        <div>Номер телефона:<b>${value.phone}</b></div>
        ${value.email ? `<div>Email: <b>${value.email}</b></div>` : ``} 
        ${value.company ? `<div>Компания: <b>${value.company}</b></div>` : ``} 
        ${value.address ? `<div>Адрес: <b>${value.address}</b></div>` : ``} 
        <div>Хочет <b>стать партнёром</b></div>
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
const buttonUserAgreement= mask.querySelector(`.button--user-agreement`);
const onClickUserAgreement = () => {
  popupUserAgreement.open();
};
buttonUserAgreement.addEventListener(`click`, onClickUserAgreement);