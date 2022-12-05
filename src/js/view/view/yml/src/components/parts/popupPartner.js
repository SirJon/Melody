import { popupConstructor } from "../popup/popupConstructor";
import { domPopupPartner } from "../popup/render/domPopupPartner";
import { svgRecord } from "../img/svgRecord";
import { InputmaskForm } from "../InputmaskForm/InputmaskForm";
import { sendRequest } from "../utils/sendRequest/sendRequest";

const body = document.querySelector(`body`);
body.append(domPopupPartner);

export const popup = new popupConstructor({
  selector: `.popup--partner`,
  overflow: true,
});

const closeButton = document.querySelector(`.popup--partner .popup__button--close`);
const mask = document.querySelector(`.popup--partner`);
const buttonSubmit = mask.querySelector(`.popup__button`);
const itemsFrom = mask.querySelectorAll(`.popup__item`);

const onClickButtonClose = (e) => {
  e.preventDefault();
  popup.close();
};
const onClickEscClose = (e) => {
  if (e.keyCode === 27) {
    e.preventDefault();
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

//svg
svgRecord({
  selector: `.popup__svg--checkbox`,
  id: `checkbox`,
});

svgRecord({
  selector: `.popup__svg--close`,
  id: `closePopup`,
});

const validity = new InputmaskForm({
  selector: `.popup--partner`
});

const requestURL = '/dir.json';

sendRequest('GET', requestURL)
  .then(data => {

    const FETCH = data.dir + `/phpmailer.php`;
    const METHOD = `POST`;

    async function handleSubmit(e, { data, responseOk }) {
      e.preventDefault();
      fetch(FETCH, {
        method: METHOD,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          responseOk;
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
              alert("Упс! Не получилось отправить форму, попробуйте отправить ещё раз");
            };
          });
        };
      }).catch(error => {
        alert("Упс! Не получилось отправить форму, попробуйте отправить ещё раз");
      });
    };

    const successfulSending = () => {
      popup.close();
      validity.clearInpits();
      buttonSubmit.disabled = true;
      itemsFrom.forEach(it => it.classList.remove(`popup__item--required`));
      alert("Спасибо, мы приняли Вашу заявку и скоро с Вами свяжемся");
    };

    itemsFrom.forEach(it => it.addEventListener(`click`, (e) => {
      it.classList.remove(`popup__item--required`);
    }));

    const errorItem = () => {
      const inputs = validity.getStatusInput();
      inputs.forEach((it, i) => {
        it.status === false ? itemsFrom[i].classList.add(`popup__item--required`) : null;
      });
    };

    const onClickButtonSubmit = (e) => {
      e.preventDefault();
      const checkValidity = validity.checkValidity();
      const getValue = validity.getValue();

      if (checkValidity === true) {
        const data = new FormData();
        const result = [];
        getValue.forEach(it => {
          for (const [key, value] of Object.entries(it)) {
            if (value != ``) {
              switch (key) {
                case `name`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Контактное имя: </b>${value}</td> </tr>`)
                  break;
                case `phone`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Телефон: </b>${value}</td> </tr>`)
                  break;
                case `email`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Email: </b>${value}</td> </tr>`)
                  break;
                case `text`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Сообщение: </b>${value}</td> </tr>`)
                  break;
                case `company`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Компания: </b>${value}</td> </tr>`)
                  break;
                case `address`:
                  result.push(`<tr> <td><b style="padding-right: 10px;">Адрес компании: </b>${value}</td> </tr>`)
                  break;

                default:
                  result.push(`<tr> <td><b style="padding-right: 10px;">${key} </b>${value}</td> </tr>`)
                  break;
              };
            };
          };
        });
        const textMsg = `<html>
        <head>
          <title>Заявка</title>
        </head>
        <body style="font-family: 'Verdana';">
          <p style="font-size: 1.5rem; font-weight: 900;">Новая заявка на партнёрство!</p>
          <table style="margin-left: 20px">
            
            ${result.join(` `)}
            
          </table>
          <hr>
        </body>
        </html>`;
        const language = `<b>${localStorage.getItem(`language`) == `ru` ? `русской` : `английской`}</b>`;
        data.append(`user`, textMsg);
        data.append(`language`, language);
        handleSubmit(e, {
          data: data,
          responseOk: successfulSending(),
        });
      } else {
        errorItem();
      };
    };

    buttonSubmit.addEventListener(`click`, onClickButtonSubmit);

  })
  .catch(err => console.log(err));