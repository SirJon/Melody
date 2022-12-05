import "../styles/sass/style.scss"
import "./parts/header";
import "./parts/footer";
import "./utils/currentItems/currentItems";
import "../components/parts/feedback";
import { popup as popupSubmit } from "./parts/popupSubmit";

// import styles bundlepng/coriander/
import 'swiper/css/bundle';

import { Swiper } from 'swiper/bundle';
import { svgRecord } from "./img/svgRecord";
import { imgRecord } from "./img/imgRecord";
import { createStore } from "./store/createStore";
import { rootReducerLang } from "./redux/rootReducerLang";
import { languageChange } from "./language/languageChange";
import { languageText } from "./content/languageText";

import essentialOils from "../img/png/mainSlide/essential-oils.png";
import spice from "../img/png/mainSlide/spice.png";
import essentialOilsEn from "../img/png/mainSlide/essential-oils-en.png";
import spiceEn from "../img/png/mainSlide/spice-en.png";
import composition from "../img/png/composition.png";
import corianderMobile from "../img/png/index/coriander/coriander-mobile.png";
import corianderTable from "../img/png/index/coriander/coriander-table.png";
import corianderDesktopMin from "../img/png/index/coriander/coriander-desktop-min.png";
import corianderDesktopMid from "../img/png/index/coriander/coriander-desktop-mid.png";
import corianderDesktopMax from "../img/png/index/coriander/coriander-desktop-max.png";
import exp from "../img/png/export.png";
import a from "../img/png/index/a.png"
import aBig from "../img/png/index/aBig.png"

import leafMain from "../img/png/index/leaf/leafMain.png";
import leafBlur from "../img/png/index/leaf/leafBlur.png";
import leafLeft from "../img/png/index/leaf/leafLeft.png";

import acFlaxSeedBig from "../img/png/index/about-company/acFlaxSeedBig.png";
import acFlaxSeedMin from "../img/png/index/about-company/acFlaxSeedMin.png";
import acGrain from "../img/png/index/about-company/acGrain.png";
import acLeaf from "../img/png/index/about-company/acLeaf.png";
import acOil from "../img/png/index/about-company/acOil.png";

import whFlaxSeed from "../img/png/index/wholesale/whFlaxSeed.png";
import whLeafBlur from "../img/png/index/wholesale/whLeafBlur.png";
import whLeafLeft from "../img/png/index/wholesale/whLeafLeft.png";
import whLeafMain from "../img/png/index/wholesale/whLeafMain.png";

const paginationButton = [`Эфирные масла`, `Специи`];
const dataLang = [`essentialOils`, `spices`];

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.categories__button--right',
    prevEl: '.categories__button--left',
  },

  pagination: {
    el: `.categories__wrapper--pagination`,
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="categories__pagination button" data-lang="${dataLang[index]}">${paginationButton[index]}</button>`;
    },
    bulletClass: `categories__pagination`,
    bulletActiveClass: `categories__pagination--activ`,
  },
});

const categoriesButton = document.querySelector(`.categories__button`);
const productFormButton = document.querySelector(`.product-form__button`);
const wholesaleButton = document.querySelector(`.wholesale__button`);
const onClickButtonOpen = (e) => {
  e.preventDefault();
  popupSubmit.open();
};

categoriesButton.addEventListener(`click`, onClickButtonOpen);
productFormButton.addEventListener(`click`, onClickButtonOpen);
wholesaleButton.addEventListener(`click`, onClickButtonOpen);

//svg record
svgRecord({
  selector: `.categories__svg`,
  id: `arrow`
});
svgRecord({
  selector: `.interactive__svg--button`,
  id: `interactiveButton`
});
svgRecord({
  selector: `.interactive__svg--rotation`,
  id: `rotationСircle`
});

//img record
imgRecord({
  selector: `.interactive__img`,
  img: corianderMobile,
  picture:
    [corianderDesktopMax, corianderDesktopMid, corianderDesktopMin, corianderTable],
});

imgRecord({
  selector: `.feedback__picture`,
  img: a,
  picture: [aBig],
});

imgRecord({
  selector: `.categories__slide--oil .categories__img-ru`,
  img: essentialOils,
});

imgRecord({
  selector: `.categories__slide--oil .categories__img-en`,
  img: essentialOilsEn,
});

imgRecord({
  selector: `.categories__slide--spice .categories__img-ru`,
  img: spice,
});

imgRecord({
  selector: `.categories__slide--spice .categories__img-en`,
  img: spiceEn,
});

imgRecord({
  selector: `.about-company__img`,
  img: composition,
});

imgRecord({
  selector: `.wholesale__img`,
  img: exp,
});

imgRecord({
  selector: `.categories__img--leaf-main`,
  img: leafMain,
});

imgRecord({
  selector: `.categories__img--leaf-blur`,
  img: leafBlur,
});

imgRecord({
  selector: `.categories__img--leaf-left`,
  img: leafLeft,
});

imgRecord({
  selector: `.about-company__img--flax-seed`,
  img: acFlaxSeedMin,
  picture: [acFlaxSeedBig],
});

imgRecord({
  selector: `.about-company__img--grain`,
  img: acGrain,
});

imgRecord({
  selector: `.about-company__img--leaf`,
  img: acLeaf,
});

imgRecord({
  selector: `.about-company__img--oil`,
  img: acOil,
});

imgRecord({
  selector: `.wholesale__img--leaf-left`,
  img: whLeafLeft,
});

imgRecord({
  selector: `.wholesale__img--leaf-blur`,
  img: whLeafBlur,
});

imgRecord({
  selector: `.wholesale__img--leaf-main`,
  img: whLeafMain,
});

imgRecord({
  selector: `.wholesale__img--flax-seed`,
  img: whFlaxSeed,
});

let localState = localStorage.getItem(`language`);
localState == null ? localState = `ru` : null;
const store = createStore(rootReducerLang, localState);

store.subscribe(() => {
  localState = localStorage.getItem(`language`);
  languageChange(languageText[localState], localState);
});

localState == null ? store.dispatch({ lang: 'ru' }) : languageChange(languageText[localState], localState);