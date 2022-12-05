import { svgRecord } from "../fileRecord/svgRecord";
import { ToggleMenu } from "../utils/ToggleMenu/ToggleMenu";
import { en, init, r1300, r800, ru } from "../redux/utils/actions";
import { store } from "../redux/store";

import { popup as popupParner } from "./popup/popupPartner";
import { EN, R1300, R800, RU } from "../redux/utils/types";
import { sendRequest } from "../utils/sendRequest/sendRequest";
import { changeTextContent } from "../WordPress/utils/changeTextContent";
import { changePhone } from "../WordPress/utils/changePhone";
import { changeEmail } from "../WordPress/utils/changeEmail";
import { mapLink } from "../WordPress/utils/mapLink";

const item = document.querySelectorAll(`.navigation__item`);
const currentPage = document.querySelector(`main`).dataset.page;
[...item].find(it => it.dataset.page == currentPage).classList.add(`navigation__item--activ`);

const mainMenu = new ToggleMenu({
  nameClass: `main-nav`,
  overflow: true,
});

const buttonMenu = document.querySelector(`.main-nav__toggle`);

const onClickMenu = () => {
  mainMenu.toggle();
};

buttonMenu.addEventListener(`click`, onClickMenu);

const languageMenu = new ToggleMenu({
  nameClass: `language`,
});


const onClickLanguage = (e) => {
  e.preventDefault();
  languageMenu.toggle();
};

const onChangeLanguage = (e) => {
  e.preventDefault();
  languageMenu.close();
};

const buttonLanguage = document.querySelector(`.language__button--select`);
const radioLanguage = document.querySelectorAll(`.language__radio`);
// 
radioLanguage.forEach(it => {
  it.addEventListener(`change`, onChangeLanguage);
});

buttonLanguage.addEventListener(`click`, onClickLanguage);


//store
//Lang
const radioRU = document.querySelector(`#language__radio-RU`);
const radioEN = document.querySelector(`#language__radio-EN`);

radioRU.addEventListener(`change`, () => {
  store.dispatch(ru());
});

radioEN.addEventListener(`change`, () => {
  store.dispatch(en());
});

store.subscribe(() => {
  const language = localStorage.getItem(`language`);
  switch (language) {
    case RU:
      radioRU.checked = true
      break;
    case EN:
      radioEN.checked = true
      break;
  }
});

//Mashine
const radioR1300 = document.querySelector(`#R-1300-header`);
const radioR800 = document.querySelector(`#R-800-header`);

radioR1300.addEventListener(`change`, () => {
  store.dispatch(r1300());
});
radioR800.addEventListener(`change`, () => {
  store.dispatch(r800());
});

store.subscribe(() => {
  const mashine = sessionStorage.getItem(`mashine`);
  switch (mashine) {
    case R1300:
      radioR1300.checked = true
      break;
    case R800:
      radioR800.checked = true
      break;
  }
});
//POPUP

const buttonsPartner = document.querySelectorAll(`.button--partner`);
const onClickButtonPartner = (e) => {
  e.preventDefault();
  popupParner.open();
};
buttonsPartner.forEach(it => {
  it.addEventListener(`click`, onClickButtonPartner);
})

svgRecord({
  selector: `.js-main-nav__svg--logo`,
  id: `logo`
});
svgRecord({
  selector: `.js-language__svg--select`,
  id: `buttonSelect`
});

//Get data json
const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const contacts = data.dir + "/database/page/contacts/contacts.json";
    sendRequest('GET', contacts)
      .then(data => {

        const changeContentWp = (data) => {
          changeTextContent(data);
          changePhone(data);
          changeEmail(data);
          mapLink(data.link);
        };

        changeContentWp(data[localStorage.getItem(`language`)]);
        store.subscribe(() => {
          if (store.getState() == `language`) {
            changeContentWp(data[localStorage.getItem(`language`)]);
          }
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });