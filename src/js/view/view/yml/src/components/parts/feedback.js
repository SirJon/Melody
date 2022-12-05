import { InputmaskForm } from "../InputmaskForm/InputmaskForm";

const validity = new InputmaskForm({
  selector: `.feedback`
});

const buttonSubmit = document.querySelector(`.feedback__button`);
const itemsFrom = document.querySelectorAll(`.feedback__item--input`);

const FETCH = `../../sendmail.php`;
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
  validity.clearInpits();
  buttonSubmit.disabled = true;
  itemsFrom.forEach(it => it.classList.remove(`feedback__item--required`));
  alert("Спасибо, мы приняли Вашу заявку и скоро с Вами свяжемся");
};

itemsFrom.forEach(it => it.addEventListener(`click`, (e) => {
  it.classList.remove(`feedback__item--required`);
}));

const errorItem = () => {
  const inputs = validity.getStatusInput();
  inputs.forEach((it, i) => {
    it.status === false ? itemsFrom[i].classList.add(`feedback__item--required`) : null;
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
              result.push(`<tr> <td><b style="padding-right: 10px;">Имя: </b>${value}</td> </tr>`)
              break;
            case `phone`:
              result.push(`<tr> <td><b style="padding-right: 10px;">Телефон: </b>${value}</td> </tr>`)
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
      <p style="font-size: 1.5rem; font-weight: 900;">Заявка c сайта</p>
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