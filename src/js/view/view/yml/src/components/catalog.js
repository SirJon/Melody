import "../styles/sass/style.scss"
import "./parts/header";
import "./parts/footer";
import "./utils/currentItems/currentItems";
import "../components/parts/feedback";

import { render } from "./utils/render/render";
import { oilProduct, spiceProduct } from "./html/productСards";
import { imgRecord } from "./img/imgRecord";
import { popup as cardProductOil } from "./parts/oilCard"
import { popup as cardProductSpice } from "./parts/spiceCard"
import { anchor } from "./utils/anchor/anchor";
import { store } from "./store/store";
import { languageChange } from "./language/languageChange";
import { languageText } from "./content/languageText";

import a from "../img/png/catalog/a.png"
import aBig from "../img/png/catalog/aBig.png"

import * as oilContent from "./content/catalogOil";
import * as spiceContent from "./content/catalogSpice";

const oilBlock = document.querySelector(`.catalog__block--oil .catalog__wrapper--products`);
const spiceBlock = document.querySelector(`.catalog__block--spice .catalog__wrapper--products`);

const oilContentArr = Object.entries(oilContent).map(it => it.pop());
const spiceContentArr = Object.entries(spiceContent).map(it => it.pop());

const renderCatalog = (language) => {
  oilBlock.innerHTML = ``;
  spiceBlock.innerHTML = ``;
  oilContentArr.forEach(it => {
    render(oilBlock, `beforeend`, oilProduct(it, language))
  });
  spiceContentArr.forEach(it => {
    render(spiceBlock, `beforeend`, spiceProduct(it, language))
  });
};

let localState = localStorage.getItem(`language`);
localState == null ? localState = `ru` : null;

store.subscribe(() => {
  localState = localStorage.getItem(`language`);
  renderCatalog(localState);
});

localState == null ? store.dispatch({ lang: 'ru' }) : languageChange(languageText[localState], localState);
renderCatalog(localState);

oilBlock.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`catalog__product`))) {
    cardProductOil.open();
    const idProduct = e.composedPath().find(it => it !== document && it !== window && it.classList.contains(`catalog__product`)).id;
    localState = localStorage.getItem(`language`);
    const product = oilContentArr.find(it => it[localState].id === idProduct);
    cardProductOil.changeContent(product[localState]);
    cardProductOil.changeSlides(product[localState]);
    cardProductOil.initSlider();
  };
});

spiceBlock.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`catalog__product`))) {
    cardProductSpice.open();
    const idProduct = e.composedPath().find(it => it !== document && it !== window && it.classList.contains(`catalog__product`)).id;
    localState = localStorage.getItem(`language`);
    const product = spiceContentArr.find(it => it[localState].id === idProduct);
    cardProductSpice.changeContent(product[localState]);
    cardProductSpice.changeSlides(product[localState]);
    cardProductSpice.initSlider();
  };
});

// Якорь специй
anchor({
  selector: `.catalog__link--anchor`,
});

//img record
imgRecord({
  selector: `.feedback__picture`,
  img: a,
  picture: [aBig],
});