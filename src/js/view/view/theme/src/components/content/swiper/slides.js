export const galarySlideImg = (img) => {
  return (
    `      
    <div class="swiper-slide galary__slide">
      <div class="galary__wrapper--img">
        <picture class="swiper-lazy galary__img--slide">
          <source srcset="${img.desktop}" media="(min-width: 1280px)">
          <img class="swiper-lazy galary__img--slide" src="${img.table}" alt="slide">
        </picture>
      </div>
    </div>
    `
  )
};

export const galarySlideVideo = (video) => {
  return (
    `      
    <div class="swiper-slide galary__slide">
      <div class="galary__wrapper--img">
        <button class="galary__button--play button">
          <svg class="galary__svg--play">
            <use xlink:href=""></use>
          </svg>
        </button>
        <img class="swiper-lazy galary__poster--slide" src="https://img.youtube.com/vi_webp/${video.id}/maxresdefault.webp" alt="slide" data-video="${video.id}" data-start="${video.start}" data-end="${video.end}">
      </div>
    </div>
    `
  )
};

export const characteristicMainSlide = (img) => {
  return (
    `      
    <div class="swiper-slide carousel__slide">
      <div class="carousel__img--wrapper">
        <img class="swiper-lazy carousel__slide--img carousel__slide--img-main" src="${img}">
      </div>
    </div>
    `
  )
};

export const characteristicThumbsSlide = (img) => {
  return (
    `
    <div class="swiper-slide carousel__slide carousel__slide--thumbs">
      <div class="carousel__img--wrapper">
        <img class="swiper-lazy carousel__slide--img carousel__slide--img-thumbs" src="${img}">
      </div>
    </div>
    `
  )
};

export const productionSlide = ({ title, description, imgDesktop, imgTable }) => {
  return (
    `
    <div class="swiper-slide slider-product__slide">
      <div class="slider-product__wrapper--content">
        <h3 class="slider-product__title">${title}</h3>
        <span class="slider-product__span">${description}</span>
      </div>
      <div class="slider-product__wrapper--img">
        <picture class="swiper-lazy slider-product__picture">
          <source srcset="${imgDesktop}" media="(min-width: 1280px)">
          <img class="slider-product__img" src="${imgTable}" alt="slide">
        </picture>
      </div>
    </div>
    `
  )
};

export const popupPhotoSlideThumbs = (img) => {
  return (
    `
    <div class="swiper-slide popup__slide popup__slide--thumbs">
      <div class="popup__img--wrapper">
        <picture class="swiper-lazy popup__slide--img popup__slide--img-thumbs">
          <source srcset="${img.desktop}" media="(min-width: 1280px)">
          <img class="swiper-lazy popup__slide--img popup__slide--img-thumbs" src="${img.table}" alt="${sessionStorage.getItem(`mashine`)}">
        </picture>
      </div>
    </div>
    `
  )
};

export const popupPhotoSlide = (img) => {
  return (
    `
    <div class="swiper-slide popup__slide">
      <div class="popup__img--wrapper swiper-zoom-container">
        <picture class="swiper-lazy popup__slide--img">
          <source srcset="${img.desktop}" media="(min-width: 1280px)">
          <img class="swiper-lazy popup__slide--img" src="${img.table}" alt="${sessionStorage.getItem(`mashine`)}">
        </picture>
      </div>
    </div>
    `
  )
};