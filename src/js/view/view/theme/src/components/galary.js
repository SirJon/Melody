import "../assets/scss/style.scss";
import "../components/modulus/header";
import "../components/modulus/footer";
import "./utils/whiteTheme/whiteTheme";
import 'swiper/css/bundle';
import "./utils/homePage/homePage";
import { Swiper } from 'swiper/bundle';
import { svgRecord } from "./fileRecord/svgRecord";
import { galarySlideImg, galarySlideVideo } from "./content/swiper/slides";
import { galarySlider, buttonLeft, buttonRight, buttonGigletLeft, buttonGigletRight } from "./content/swiper/slider";
import { getNode } from "./utils/getNode/getNode";
import { popup as popupVideo } from "./modulus/popup/popupVideo";
import { popup as popupPhoto } from "./modulus/popup/popupPhoto";
import { sendRequest } from "./utils/sendRequest/sendRequest";

const renderSlider = (data) => {
  let length;
  const ONE_SLIDE = 1;
  const TWO_SLIDES = 2;
  if (data.img !== undefined) {
    length = data.img.length;
  } else if (data.video !== undefined) {
    length = data.video.length;
  };

  const container = document.querySelector(data.containerSelector);
  container.appendChild(getNode(galarySlider));
  let slider;

  switch (length) {
    case ONE_SLIDE:
      container.appendChild(getNode(buttonGigletLeft));
      container.appendChild(getNode(buttonGigletRight));
      slider = new Swiper(`${data.containerSelector} .swiper`, {
        direction: 'horizontal',
        loopedSlides: 0,
        breakpoints: {
          360: {
            slidesPerView: 1.3,
            spaceBetween: 15,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 28,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 35,
          }
        },
        //Ленивая загрузка
        lazy: true,

        slideActiveClass: 'galary__slide--active',
      });
      break;
    case TWO_SLIDES:
      container.appendChild(getNode(buttonGigletLeft));
      container.appendChild(getNode(buttonGigletRight));
      slider = new Swiper(`${data.containerSelector} .swiper`, {
        direction: 'horizontal',
        loopedSlides: 0,
        breakpoints: {
          360: {
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 35,
          }
        },
        //Ленивая загрузка
        lazy: true,

        slideActiveClass: 'galary__slide--active',
      });
      break;

    default:
      container.appendChild(getNode(buttonLeft));
      container.appendChild(getNode(buttonRight));
      slider = new Swiper(`${data.containerSelector} .swiper`, {
        direction: 'horizontal',
        loop: true,
        loopedSlides: 2,
        grabCursor: true,
        breakpoints: {
          360: {
            slidesPerView: 1.3,
            spaceBetween: 15,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 28,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 35,
            centeredSlides: true,
          }
        },
        //Ленивая загрузка
        lazy: true,

        slideActiveClass: 'galary__slide--active',

        navigation: {
          nextEl: `${data.containerSelector} .galary__button-swiper--right`,
          prevEl: `${data.containerSelector} .galary__button-swiper--left`,
        },

      });
      break;
  }
  if(data.img !== undefined){
    data.img.forEach(it => {
      slider.appendSlide(galarySlideImg(it));
    });
    const slides = container.querySelectorAll(`.swiper-slide`);
    slides.forEach(it => {
      it.addEventListener(`click`, () => {
        popupPhoto.open();
        popupPhoto.creatSlider(data.img, Number(it.ariaLabel[0]) + 1);
      })
    })
  };

  if (data.video !== undefined) {
    data.video.forEach(it => {
      slider.appendSlide(galarySlideVideo(it));
    });
    const buttonsVideo = document.querySelectorAll(`.galary__button--play`);
    const onClickButtonVideo = (e) => {
      const img = e.composedPath().find(it => it.classList.contains("galary__wrapper--img")).querySelector(`img`);
      popupVideo.open();
      popupVideo.videoRecord(img);
    }
    buttonsVideo.forEach(it => {
      it.addEventListener(`click`, onClickButtonVideo);
    });
  };
  slider.slideTo(2, 1, false);
  svgRecord({
    selector: `.galary__svg--play`,
    id: `sliderPlay`,
  });
  svgRecord({
    selector: `.svg__swiper-button`,
    id: `sliderButton`,
  });
};

//Get data json
const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const galaryURL = data.dir + "/database/page/galary/galary.json";

    //INDEX data
    sendRequest('GET', galaryURL)
      .then(data => {


        const R1300 = `R1300`;
        const R800 = `R800`;

        renderSlider({
          containerSelector: `.galary__slider--r1300-photo`,
          img: data[R1300].img,
        });

        renderSlider({
          containerSelector: `.galary__slider--r1300-video`,
          video: data[R1300].video,
        });

        renderSlider({
          containerSelector: `.galary__slider--r800-photo`,
          img: data[R800].img,
        });

        renderSlider({
          containerSelector: `.galary__slider--r800-video`,
          video: data[R800].video,
        });

      })
      .catch(err => console.log(err));

  })
  .catch(err => {
    console.log(err);
  });