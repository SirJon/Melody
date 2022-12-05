import { ToggleMenu } from "../toggleMenu/toggleMenu";
import { svgRecord } from "../img/svgRecord";
import { popup as popupParnter } from "../parts/popupPartner";
import { store } from "../store/store";
import { languageText } from "../content/languageText";
import { languageChange } from "../language/languageChange";
const partnerButtonMobile = document.querySelector(`.partner__button`);
const partnerButtonDesktop = document.querySelector(`.main-nav__button`);

const onClickButtonOpen = (e) => {
  e.preventDefault();
  popupParnter.open();
};

partnerButtonMobile.addEventListener(`click`, onClickButtonOpen);
partnerButtonDesktop.addEventListener(`click`, onClickButtonOpen);

//toggleMenu main
const menuNav = new ToggleMenu({
  nameClass: `main-nav`,
  overflowBody: true,
});
const btnToggle = document.querySelector(`.main-nav__toggle`);
const onClickBtnToggle = (e) => {
  e.preventDefault();
  menuNav.toggle();
};
btnToggle.addEventListener(`click`, onClickBtnToggle);

//toggleMenu language
const languageMenu = new ToggleMenu({
  nameClass: `language`,
});
const btnToggleLanguage = document.querySelector(`.language__button`);
const onClickBtnToggleLanguage = (e) => {
  e.preventDefault();
  languageMenu.toggle();
};
btnToggleLanguage.addEventListener(`click`, onClickBtnToggleLanguage);

const languageButtons = document.querySelectorAll(`.language__radio`);
languageButtons.forEach(it => {
  it.addEventListener(`change`, () => {
    languageMenu.close();
  });
});

svgRecord({
  selector: `.main-nav__svg--logo-ru`,
  id: `logo-ru`
});
svgRecord({
  selector: `.main-nav__svg--logo-en`,
  id: `logo-en`
});
svgRecord({
  selector: `.language__svg--select`,
  id: `selectLanguage`
});

let localState = localStorage.getItem(`language`);
const ruLanguage = document.querySelector(`#language__radio-RU`);

ruLanguage.addEventListener(`change`, () => {
  ruLanguage.checked ? store.dispatch({ lang: 'ru' }) : null;
});
const enLanguage = document.querySelector(`#language__radio-EN`);
enLanguage.addEventListener(`change`, () => {
  enLanguage.checked ? store.dispatch({ lang: 'en' }) : null;
});

store.subscribe(() => {
  localState = localStorage.getItem(`language`);
  languageChange(languageText[localState], localState);
});

localState == null ? store.dispatch({ lang: 'ru' }) : languageChange(languageText[localState], localState);