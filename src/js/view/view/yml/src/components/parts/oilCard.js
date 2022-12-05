import 'swiper/css/bundle';

import { Swiper } from 'swiper/bundle';
import { popupConstructor } from "../popup/popupConstructor";
import { imgRecord } from '../img/imgRecord';
import { svgRecord } from '../img/svgRecord';
import { domCardProductOil } from "../popup/render/domCardProductOil";
import { popup as popupParnter } from "../parts/popupSubmit";
import glass from "../../img/png/catalog/card/oil/glass.png";
import barrel from "../../img/png/catalog/card/oil/barrel.png";

const body = document.querySelector(`body`);
body.appendChild(domCardProductOil);

export const popup = new popupConstructor({
  selector: `.card-product--oil`,
  overflow: true,
  classShow: `card-product--show`,
  classHide: `card-product--hide`,
});

const mask = document.querySelector(`.card-product--oil`);
const closeButton = document.querySelector(`.card-product--oil .card-product__button--close`);
mask.addEventListener(`click`, (e) => {
  e.composedPath().some(it => it !== document && it !== window && it.classList.contains(`card-product__content`))
    ? null
    : popup.close();
});
closeButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  popup.close();
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    e.preventDefault();
    popup.close();
  };
});

const swiperMain = new Swiper('.card-product--oil .card-product__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  loopedSlides: 2,
  spaceBetween: 10,
});

const swiperThumbs = new Swiper('.card-product--oil .card-product__swiper--thumbs', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  loopedSlides: 2,
  spaceBetween: 7,
  grabCursor: true,

  centeredSlides: true,
  slideToClickedSlide: true,
  slideActiveClass: 'card-product__slide--active',

  navigation: {
    nextEl: '.card-product__button-swiper--right',
    prevEl: '.card-product__button-swiper--left',
  },
});

swiperMain.controller.control = swiperThumbs;
swiperThumbs.controller.control = swiperMain;



const mainSlide = (img) => {
  return (
    `      
    <div class="swiper-slide card-product__slide">
      <img class="card-product__slide--img" src="${img}">
    </div>
    `
  )
};

const thumbsSlide = (img) => {
  return (
    `
    <div class="swiper-slide card-product__slide card-product__slide--thumbs">
      <img class="card-product__slide--img" src="${img}">
    </div>
    `
  )
};

popup.addMethod(`changeContent`, (obj) => {
  document.querySelector(`.card-product--oil .card-product__span--name`).textContent = obj.name;
  document.querySelector(`.card-product--oil .card-product__span--material`).textContent = obj.material;
  document.querySelector(`.card-product--oil .card-product__span--description`).textContent = obj.description;
  document.querySelector(`.card-product--oil .card-product__span--compound`).textContent = obj.compound;
});
popup.addMethod(`changeSlides`, (obj) => {
  swiperMain.removeAllSlides();
  swiperThumbs.removeAllSlides();
  obj.slides.forEach(it => {
    swiperMain.appendSlide(mainSlide(it));
    swiperThumbs.appendSlide(thumbsSlide(it));
  });
});
popup.addMethod(`initSlider`, () => {
  swiperMain.slidePrev();
  swiperMain.slideTo(2, 1, false);
});

///Open reticle
const reticleContent = document.querySelectorAll(`.card-product--oil .info__reticle`);
const allCheckBox = document.querySelectorAll(`.card-product--oil .info__input`);

allCheckBox.forEach((mainCheckbox, i) => {
  mainCheckbox.addEventListener(`click`, (e) => {
    const input = e.currentTarget;
    const inputDatasetInfo = input.dataset.info;
    const content = Array.from(reticleContent).find(el => el.dataset.info === inputDatasetInfo);

    if (input.checked === true) {

      allCheckBox.forEach(it => {
        it.checked = false;
      });
      reticleContent.forEach(it => {
        it.classList.remove(`info__reticle--show`);
      })
      input.checked = true;
      content.classList.add(`info__reticle--show`);

    } else {
      input.checked = false;
      content.classList.remove(`info__reticle--show`);
    }
  });

  const productButton = document.querySelector(`.card-product--oil .card-product__button--order`);

  const onClickButtonOpen = (e) => {
    e.preventDefault();
    popupParnter.open();
  };

  productButton.addEventListener(`click`, onClickButtonOpen);

  //svg record
  svgRecord({
    selector: `.card-product--oil .card-product__svg--button`,
    id: `arrowPopup`
  });
  svgRecord({
    selector: `.card-product--oil .card-product__svg--close`,
    id: `arrowPopup`
  });

  //img record
  imgRecord({
    selector: `.card-product--oil .info__img--glass`,
    img: glass,
  });
  imgRecord({
    selector: `.card-product--oil .info__img--barrel`,
    img: barrel,
  });
});