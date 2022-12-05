import 'swiper/css/bundle';
import Swiper from "swiper";
import { Popup } from "../../utils/Popup/Popup";
import { InputmaskForm } from "../../InputmaskForm/InputmaskForm";
import { svgRecord } from "../../fileRecord/svgRecord";
import { nodePopupGalary } from "../../content/popup/node/nodePopup";
import { popupPhotoSlide, popupPhotoSlideThumbs } from "../../content/swiper/slides";

const classPopup = `.popup--photo`;
const ESC_KEY = 27;

class Photo extends Popup {
  constructor(options) {
    super(options);
  }

  creatSlider(images, currentSlide) {
    const main = new Swiper(`.popup__slider--main`, {
      // Optional parameters
      direction: 'horizontal',
      // autoHeight: true,
      loopedSlides: 2,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: `.popup__button--next`,
        prevEl: `.popup__button--prev`,
      },
    });

    const thumb = new Swiper(`.popup__slider--thumbs`, {
      // Optional parameters
      slideToClickedSlide: true,

      loopedSlides: 2,
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: `.popup__button-thumb--next`,
        prevEl: `.popup__button-thumb--prev`,
      },
      slideActiveClass: 'popup__slide--activ-thumbs',
    });

    main.controller.control = thumb;
    thumb.controller.control = main;
    main.removeAllSlides();
    thumb.removeAllSlides();
    images.forEach(it => {
      main.appendSlide(popupPhotoSlide(it));
      thumb.appendSlide(popupPhotoSlideThumbs(it));
    });
    main.slideTo(Number(currentSlide), 1, false);
  }
}

export const popup = new Photo({
  selector: classPopup,
  overflow: true,
  node: nodePopupGalary,
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

const validity = new InputmaskForm({
  selector: classPopup,
});

const main = document.querySelector(`main`);
if(main.dataset.page !== 'index') {
  const product = mask.querySelector(`.popup__span--products`);
  const separator = mask.querySelector(`.popup__title-separator`);
  product.style.display = "none";
  separator.style.display = "none";
}

svgRecord({
  selector: `.popup__svg--close`,
  id: `popupClose`,
});
svgRecord({
  selector: `.popup__svg--button`,
  id: `sliderButton`,
});