import { ToggleMenu } from "../toggleMenu/toggleMenu.js";
import { svgRecord } from "../img/svgRecord.js";
import { popup as  popupPartner} from "./popupPartner.js";

const partnerButton = document.querySelector(`.partner__button`);
const onClickButtonOpen = (e) => {
  e.preventDefault();
  popupPartner.open();
};

partnerButton.addEventListener(`click`, onClickButtonOpen);

//toggleMenu main
const menuNav = new ToggleMenu({
  nameClass: `main-nav`,
  overflowBody: true,
});
const btnToggle = document.querySelector(`.main-nav__toggle`);
const onClickButtonMenu = (e) => {
  e.preventDefault();
  menuNav.toggle();
};
btnToggle.addEventListener(`click`, onClickButtonMenu);

//toggleMenu language
const languageMenu = new ToggleMenu({
  nameClass: `main-nav__language`,
});
const btnToggleLanguage = document.querySelector(`.language__button`);
const onClickButtonMenuLanguage = (e) => {
  e.preventDefault();
  languageMenu.toggle();
};
btnToggleLanguage.addEventListener(`click`, onClickButtonMenuLanguage);

//Logo
const SCROLL_TRIGER = 300;
const logo = document.querySelector(`.main-nav__logo`);
const onScrollWindow = () => {
  window.pageYOffset >= SCROLL_TRIGER ? logo.classList.add(`main-nav__logo--show`) : logo.classList.remove(`main-nav__logo--show`);
}

const main = document.querySelector(`main`);
if (main !== undefined){
  main.dataset.page == `index` ?   window.addEventListener('scroll', onScrollWindow) : logo.classList.add(`main-nav__logo--show`);
}

svgRecord({
  selector: `.main-nav__svg--logo`,
  id: `logo`,
});
svgRecord({
  selector: `.main-nav__svg--language`,
  id: `selectLanguage`,
});