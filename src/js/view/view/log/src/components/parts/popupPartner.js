import { svgRecord } from "../img/svgRecord";
import { domPopupPartner } from "../popup/render/domPopupParnter";
import { popupConstructor } from "../popup/popupConstructor";
import { InputmaskForm } from "../InputmaskForm/InputmaskForm";
import { sendRequest } from "../sendRequest/sendRequest";

const body = document.querySelector(`body`);
body.appendChild(domPopupPartner);

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
svgRecord({
  selector: `.popup__svg--checkbox`,
  id: `checkbox`,
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
              alert("Something Went Wrong. Please try again");
            };
          });
        };
      }).catch(error => {
        alert("Something Went Wrong. Please try again");
      });
    };

    const successfulSending = () => {
      popup.close();
      validity.clearInpits();
      buttonSubmit.disabled = true;
      alert("Your application has been received, someone will contact you shortly");
    };

    const onClickButtonSubmit = (e) => {
      e.preventDefault();
      const getValue = validity.getValue();

      const data = new FormData();
      const result = [];
      let flag = 0;
      getValue.forEach(it => {
        for (const [key, value] of Object.entries(it)) {
          if (value != ``) {
            flag++;
            switch (key) {
              case `name`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Контактное имя: </b>${value}</td> </tr>`)
                break;
              case `phone`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Телефон: </b>${value}</td> </tr>`)
                break;
              case `email`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Email: </b>${value}</td> </tr>`)
                break;
              case `text`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Сообщение: </b>${value}</td> </tr>`)
                break;
              case `company`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Компания: </b>${value}</td> </tr>`)
                break;
              case `address`:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">Адрес компании: </b>${value}</td> </tr>`)
                break;

              default:
                result.push(`<tr> <td><b style="padding-right: 0.8rem;">${key} </b>${value}</td> </tr>`)
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
          <p style="font-size: 1.2rem; font-weight: 900;">Новая заявка на партнёрство!</p>
          <table style="margin-left: 1rem">
            
            ${result.join(` `)}
            
          </table>
          <hr>
        </body>
        </html>`;
      data.append(`partner`, textMsg);
      if (flag > 0) {
        handleSubmit(e, {
          data: data,
          responseOk: successfulSending(),
        });
      } else {
        alert("Please fill out field");
      }
    };

    buttonSubmit.addEventListener(`click`, onClickButtonSubmit);
  })
  .catch(err => console.log(err));