import "../styles/scss/style.scss"
import 'swiper/css/bundle';
import "./parts/header";
import "./parts/footer";
import "./currentItems/currentItems";

import { Swiper } from 'swiper/bundle';
import { imgRecord } from "./img/imgRecord";
import { svgRecord } from "./img/svgRecord";

import { popup as popupPartner } from "./parts/popupPartner";
import { popup as popupVideo } from "./parts/popupVideo";

import { sendRequest } from "./sendRequest/sendRequest";

//IMG
//welcome block
import plateMob from "../img/webp/index/welcome/plate/plateMob.webp";
import plateTab from "../img/webp/index/welcome/plate/plateTab.webp";
import plate1x from "../img/webp/index/welcome/plate/plate1x.webp";
import chocolateDown from "../img/webp/index/welcome/piece/chocolateDown.webp";
import chocolateUp from "../img/webp/index/welcome/piece/chocolateUp.webp";
import coconutDown from "../img/webp/index/welcome/piece/coconutDown.webp";
import coconutUp from "../img/webp/index/welcome/piece/coconutUp.webp";
import mangoDown from "../img/webp/index/welcome/piece/mangoDown.webp";
import mangoUp from "../img/webp/index/welcome/piece/mangoUp.webp";
import snickersDown from "../img/webp/index/welcome/piece/snickersDown.webp";
import snickersUp from "../img/webp/index/welcome/piece/snickersUp.webp";
import strawberryDown from "../img/webp/index/welcome/piece/strawberryDown.webp";
import strawberryUp from "../img/webp/index/welcome/piece/strawberryUp.webp";

import cookieMob from "../img/webp/index/welcome/cookieMob.webp";
import cookieTab from "../img/webp/index/welcome/cookieTab.webp";
import cookie1x from "../img/webp/index/welcome/cookie1x.webp";
import cookie2x from "../img/webp/index/welcome/cookie2x.webp";
import cookie3x from "../img/webp/index/welcome/cookie3x.webp";
import honeyMob from "../img/webp/index/welcome/honeyMob.webp";
import honeyTab from "../img/webp/index/welcome/honeyTab.webp";
import honey1x from "../img/webp/index/welcome/honey1x.webp";
import honey2x from "../img/webp/index/welcome/honey2x.webp";
import honey3x from "../img/webp/index/welcome/honey3x.webp";
import macaron1x from "../img/webp/index/welcome/macaron1x.webp";
import macaron2x from "../img/webp/index/welcome/macaron2x.webp";
import macaron3x from "../img/webp/index/welcome/macaron3x.webp";
import raspberry from "../img/webp/index/welcome/raspberry.webp";
//catalog block
import cakeMob from "../img/webp/index/catalog/cakeMob.webp";
import cakeTab from "../img/webp/index/catalog/cakeTab.webp";
import cake1x from "../img/webp/index/catalog/cake1x.webp";
import cake2x from "../img/webp/index/catalog/cake2x.webp";
import cake3x from "../img/webp/index/catalog/cake3x.webp";
import cheesecakeMob from "../img/webp/index/catalog/cheesecakeMob.webp";
import cheesecakeTab from "../img/webp/index/catalog/cheesecakeTab.webp";
import cheesecake1x from "../img/webp/index/catalog/cheesecake1x.webp";
import cheesecake2x from "../img/webp/index/catalog/cheesecake2x.webp";
import cheesecake3x from "../img/webp/index/catalog/cheesecake3x.webp";
//partner block
import partnerMob from "../img/webp/index/partner/partnerMob.webp";
import partnerTab from "../img/webp/index/partner/partnerTab.webp";
import partner from "../img/webp/index/partner/partner.webp";

const IMG_WIDTH = 1280;

//Slider
const cheesecakesSwiper = new Swiper('.cheesecakes__swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 15,

  breakpoints: {
    320: {
      slidesPerView: 0.7,
    },
    640: {
      slidesPerView: 0.9,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 21,
    },
  },

  navigation: {
    nextEl: '.cheesecakes__next',
    prevEl: '.cheesecakes__prev',
  },
});

const appendSlide = (arrPhoto) => {
  cheesecakesSwiper.appendSlide(`     
    <div class="swiper-slide">
      <div class="cheesecakes__wrapper--galary">
        <div class="cheesecakes__galary">
          ${arrPhoto
      .map(it => {
        return (`
                    <div class="cheesecakes__block">
                      <img src="${it}" alt="" class="cheesecakes__img">
                    </div>
                    `)
      })
      .join(``)
    }
        </div>
      </div>
    </div>
  `);
};

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const indexURL = data.dir + "/database/index.json"

    sendRequest('GET', indexURL)
      .then(data => {
        const videoProduction = document.querySelector(`.video__video`);
        const videoCheesecakes = document.querySelector(`.cheesecakes__video`);
        videoProduction.dataset.video = `https://www.youtube.com/embed/${data.video.linkCatalog}`;
        videoCheesecakes.dataset.video = `https://www.youtube.com/embed/${data.video.linkCheesecakes}`;
        window.innerWidth > IMG_WIDTH
          ? videoProduction.src = data.video.posterCatalog.desktop
          : videoProduction.src = data.video.posterCatalog.table;
        window.innerWidth > IMG_WIDTH
          ? videoCheesecakes.src = data.video.posterCheesecakes.desktop
          : videoCheesecakes.src = data.video.posterCheesecakes.table;

        data.slider.forEach(it => {
          appendSlide(
            Object.entries(it)
              .slice(1)
              .map(it => {
                const [, value] = it;
                 if(window.innerWidth > IMG_WIDTH) {
                  return value.desktop
                 } else return value.table
              })
          )
        });
        cheesecakesSwiper.slideTo(1, 1, false);
      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });

//Add footer__wave--index class
const footerWave = document.querySelector(`.footer__wave`);
footerWave.classList.add(`footer__wave--index`)

//Popup Partner
const partnerButton = document.querySelector(`.stories__button--partnership`);
const feedbackButton = document.querySelector(`.feedback__button`);
const onClickButtonOpen = (e) => {
  e.preventDefault();
  popupPartner.open();
};

partnerButton.addEventListener(`click`, onClickButtonOpen);
feedbackButton.addEventListener(`click`, onClickButtonOpen);

//Popup Video
const buttonProduction = document.querySelector(`.video__button`);
const buttonCheesecakes = document.querySelector(`.cheesecakes__button--watch`);
const iframeYouTube = document.querySelector(`.popup__iframe--youtube`);
const onClickButtonProductionPlay = (e) => {
  e.preventDefault();
  popupVideo.open();

  e.composedPath().forEach(it => {
    if (it !== document && it !== window && it.classList.contains(`video`)) {
      iframeYouTube.src = it.querySelector(`img`).dataset.video;
    };
  });
};
const onClickButtonCheesecakesPlay = (e) => {
  e.preventDefault();
  popupVideo.open();

  e.composedPath().forEach(it => {
    if (it !== document && it !== window && it.classList.contains(`cheesecakes__wrapper--video`)) {
      iframeYouTube.src = it.querySelector(`img`).dataset.video;
    };
  });
};

buttonProduction.addEventListener(`click`, onClickButtonProductionPlay);
buttonCheesecakes.addEventListener(`click`, onClickButtonCheesecakesPlay);

//Img
imgRecord({
  selector: `.stories__picture--plate`,
  img: plateMob,
  picture: [plate1x, plateTab],
});
imgRecord({
  selector: `.stories__img--chocolateDown`,
  img: chocolateDown,
});
imgRecord({
  selector: `.stories__img--chocolateUp`,
  img: chocolateUp,
});
imgRecord({
  selector: `.stories__img--coconutDown`,
  img: coconutDown,
});
imgRecord({
  selector: `.stories__img--coconutUp`,
  img: coconutUp,
});
imgRecord({
  selector: `.stories__img--mangoDown`,
  img: mangoDown,
});
imgRecord({
  selector: `.stories__img--mangoUp`,
  img: mangoUp,
});
imgRecord({
  selector: `.stories__img--snickersDown`,
  img: snickersDown,
});
imgRecord({
  selector: `.stories__img--snickersUp`,
  img: snickersUp,
});
imgRecord({
  selector: `.stories__img--strawberryDown`,
  img: strawberryDown,
});
imgRecord({
  selector: `.stories__img--strawberryUp`,
  img: strawberryUp,
});

imgRecord({
  selector: `.stories__picture--cookie`,
  img: cookieMob,
  picture: [cookie3x, cookie2x, cookie1x, cookieTab],
});
imgRecord({
  selector: `.stories__picture--honey`,
  img: honeyMob,
  picture: [honey3x, honey2x, honey1x, honeyTab],
});
imgRecord({
  selector: `.stories__img--raspberry`,
  img: raspberry,
});
imgRecord({
  selector: `.stories__picture--macaron`,
  img: macaron1x,
  picture: [macaron3x, macaron2x],
});

imgRecord({
  selector: `.cakes__img--cheesecake`,
  img: cheesecakeMob,
  picture: [cheesecake3x, cheesecake2x, cheesecake1x, cheesecakeTab],
});
imgRecord({
  selector: `.cakes__img--cake`,
  img: cakeMob,
  picture: [cake3x, cake2x, cake1x, cakeTab],
});
imgRecord({
  selector: `.feedback__picture`,
  img: partnerMob,
  picture: [partner, partnerTab],
});

//Svg
svgRecord({
  selector: `.stories__svg--unicorn`,
  id: `unicorn`,
});
svgRecord({
  selector: `.cakes__svg--button`,
  id: `arrow`,
});
svgRecord({
  selector: `.video__svg`,
  id: `play`,
});
svgRecord({
  selector: `.about-company__svg--rotate`,
  id: `rotate`,
});
svgRecord({
  selector: `.about-company__svg--button`,
  id: `play`,
});
svgRecord({
  selector: `.about-company__svg--button`,
  id: `play`,
});

svgRecord({
  selector: `.about-company__svg--cake`,
  id: `cake`,
});
svgRecord({
  selector: `.about-company__svg--cost`,
  id: `cost`,
});
svgRecord({
  selector: `.about-company__svg--ingredients`,
  id: `ingredients`,
});
svgRecord({
  selector: `.about-company__svg--handshake`,
  id: `handshake`,
});
svgRecord({
  selector: `.about-company__svg--building`,
  id: `building`,
});

svgRecord({
  selector: `.cheesecakes__svg`,
  id: `play`,
});
svgRecord({
  selector: `.cheesecakes__svg--button`,
  id: `arrow`,
});