import "../assets/scss/style.scss";
import 'swiper/css/bundle';
import "../components/modulus/header";
import "../components/modulus/footer";
import { imgRecord } from "./fileRecord/imgRecord";
import { svgRecord } from "./fileRecord/svgRecord";
import { Swiper } from 'swiper/bundle';
import { characteristicMainSlide, characteristicThumbsSlide, productionSlide } from "./content/swiper/slides";
import { popup as popupBuy } from "./modulus/popup/popupBuy";
import { popup as popupCertificate } from "./modulus/popup/popupCertificate";
import { popup as popupEquipment } from "./modulus/popup/popupEquipment";
import { popup as popupPhoto } from "./modulus/popup/popupPhoto";
import { popup as popupVideo } from "./modulus/popup/popupVideo";
import tinkoff from "@tcb-web/create-credit";
import { store } from "./redux/store";
import { base, full, options, r1300, r800 } from "./redux/utils/actions";
import { BASE, FULL, OPTIONS, R1300, R800, RU } from "./redux/utils/types";
import { sendRequest } from "./utils/sendRequest/sendRequest";
import { videoId } from "./WordPress/utils/videoId";

//Video
import video from "../assets/video/video.mp4";

//img
import car from "../assets/img/webp/index/company/car.webp";
import carX2 from "../assets/img/webp/index/company/carX2.webp";
import carX3 from "../assets/img/webp/index/company/carX3.webp";
import workers from "../assets/img/webp/index/company/1.webp";
import workersX2 from "../assets/img/webp/index/company/1X2.webp";
import workersX3 from "../assets/img/webp/index/company/1X3.webp";
import production from "../assets/img/webp/index/company/2.webp";
import productionX2 from "../assets/img/webp/index/company/2X2.webp";
import productionX3 from "../assets/img/webp/index/company/2X3.webp";
import { changeTextContent } from "./WordPress/utils/changeTextContent";
import { InputmaskForm } from "./InputmaskForm/InputmaskForm";
import { sendMail } from "./utils/sendMail/sendMail";

const carusel = new Swiper('.carousel__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  loopedSlides: 2,
  spaceBetween: 65,
  breakpoints: {
    1280: {
      spaceBetween: 100,
    }
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  //Ленивая загрузка
  lazy: true,
});

const caruselThumbs = new Swiper('.carousel__swiper--thumbs', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 2,
  grabCursor: true,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 65,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 45,
      centeredSlides: true,
    }
  },
  //Ленивая загрузка
  lazy: true,

  slideToClickedSlide: true,
  slideActiveClass: 'carousel__slide--active',

  navigation: {
    nextEl: '.carousel__button-swiper--right',
    prevEl: '.carousel__button-swiper--left',
  },
});

carusel.controller.control = caruselThumbs;
caruselThumbs.controller.control = carusel;

//Product slider
const sliderProduct = new Swiper('.slider-product', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  loopedSlides: 1,
  spaceBetween: 50,
  //Эффект переключения
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  //Автовоспроизведение
  autoplay: {
    delay: 4000,
  },
  //Отключить автовоспроизведение при взаимодействии со слайдером
  pauseOnMouseEnter: true,
  //Ленивая загрузка
  lazy: true,

  navigation: {
    nextEl: '.slider-product__button--next',
    prevEl: '.slider-product__button--prev',
  },
});



//Popup Buy
const buttonsPopupBuy = document.querySelectorAll(`.purchase__button--order`);
const onClickButtonBuy = (e) => {
  e.preventDefault();
  popupBuy.open();
};
buttonsPopupBuy.forEach(it => {
  it.addEventListener(`click`, onClickButtonBuy);
});

//Popup Tinkoff
const buttonCreditOpen = document.querySelectorAll(`.purchase__button--buy`);
const onClickCredit = () => {
  const mashin = document.querySelector(`.characteristic__span--model`).textContent;
  const checkBox = document.querySelectorAll(`.form__radio`);
  const label = document.querySelectorAll(`.form__label`);
  const index = [...checkBox].findIndex(it => it.checked == true);
  const productName = `${index == 0 ? mashin : ``} ${label[index].textContent}`;
  const costs = document.querySelector(`#cost`);
  const priceMashine = Number(costs.textContent.replace(/\s/g, ''));
  tinkoff.create({
    shopId: 'blowmolding',
    showcaseId: 'blowmolding',
    promoCode: 'default',
    items: [
      { name: productName, price: priceMashine, quantity: 1 },
    ],
    sum: priceMashine
  });
}
buttonCreditOpen.forEach(it => {
  it.addEventListener(`click`, onClickCredit);
});

//Popup certificat
const buttonCertificatOpen = document.querySelector(`.characteristic__button`);
const onCLickCertificat = () => {
  popupCertificate.open()
};
buttonCertificatOpen.addEventListener(`click`, onCLickCertificat);

//Popup Equipment
const buttonEquipmentBasicOpen = document.querySelector(`.form__button--info--basic`);
const buttonEquipmentOptionOpen = document.querySelector(`.form__button--info--option`);
const buttonEquipmentFullOpen = document.querySelector(`.form__button--info--full`);
const onClickBasic = () => {
  popupEquipment.openBasic();
};
const onClickOption = () => {
  popupEquipment.openOption();
};
const onClickFull = () => {
  popupEquipment.openFull();
};
buttonEquipmentBasicOpen.addEventListener(`click`, onClickBasic);
buttonEquipmentOptionOpen.addEventListener(`click`, onClickOption);
buttonEquipmentFullOpen.addEventListener(`click`, onClickFull);


//Redux mashine
const radioR1300 = document.querySelector(`#R-1300`);
const radioR800 = document.querySelector(`#R-800`);
radioR1300.addEventListener(`change`, () => {
  store.dispatch(r1300());
});
radioR800.addEventListener(`change`, () => {
  store.dispatch(r800());
});

store.subscribe(() => {
  switch (sessionStorage.getItem(`mashine`)) {
    case R1300:
      radioR1300.checked = true
      break;
    case R800:
      radioR800.checked = true
      break;
  }
});



//Complectation
const radioBase = document.querySelector(`#form--base`);
const radioOptions = document.querySelector(`#form--options`);
const radioFull = document.querySelector(`#form--full`);
radioBase.addEventListener(`change`, () => {
  store.dispatch(base());
});
radioOptions.addEventListener(`change`, () => {
  store.dispatch(options());
});
radioFull.addEventListener(`change`, () => {
  store.dispatch(full());
});

store.subscribe(() => {
  const complect = sessionStorage.getItem(`complect`);
  switch (complect) {
    case BASE:
      radioBase.checked = true
      break;
    case OPTIONS:
      radioOptions.checked = true
      break;
    case FULL:
      radioFull.checked = true
      break;
  }
});




//Show Mini radio mashine
const option = document.querySelector(".option-product");
const referencePoint = document.querySelector(".aviailability");

const position = (referencePoint, element) => {
  const targetPosition = {
    top: window.pageYOffset + referencePoint.getBoundingClientRect().top,
    left: window.pageXOffset + referencePoint.getBoundingClientRect().left,
    right: window.pageXOffset + referencePoint.getBoundingClientRect().right,
    bottom: window.pageYOffset + referencePoint.getBoundingClientRect().bottom
  };

  const windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom &&
    targetPosition.right > windowPosition.left &&
    targetPosition.left < windowPosition.right) {
    element.classList.remove("option-product--mini");
  } else {
    element.classList.add("option-product--mini");
  };
};

position(referencePoint, option);

window.addEventListener("scroll", () => {
  position(referencePoint, option);
});



//IMG
imgRecord({
  selector: `.js-about-us__img--workers`,
  img: workers,
  picture: [workersX3, workersX2],
});
imgRecord({
  selector: `.js-about-us__img--production`,
  img: production,
  picture: [productionX3, productionX2],
});
imgRecord({
  selector: `.js-delivery__img`,
  img: car,
  picture: [carX3, carX2],
});
svgRecord({
  selector: `.form__svg--radio`,
  id: `radioChecked`,
});
svgRecord({
  selector: `.svg__swiper-button`,
  id: `sliderButton`,
});
svgRecord({
  selector: `.carousel__svg--popup`,
  id: `openPhoto`,
});
svgRecord({
  selector: `.carousel__svg--watch`,
  id: `playVideo`,
});
svgRecord({
  selector: `.option-product__svg--background`,
  id: `optionBackground`,
});
svgRecord({
  selector: `.option-product__svg--triangle`,
  id: `optionTriangle`,
});
svgRecord({
  selector: `.production__svg--watch`,
  id: `playVideo`,
});
svgRecord({
  selector: `.form__svg`,
  id: `buttonSelect`,
});

//video
const videoBack = document.querySelector(`.background-video__video`);
videoBack.src = video;



//Form
const validity = new InputmaskForm({
  selector: `.order__list`,
});
const buttonSubmit = document.querySelector(`.order__button`);
const itemsFrom = [...document.querySelectorAll(`.order__item`)];
itemsFrom.pop();
const removerValidate = () => {
  itemsFrom.forEach(it => {
    it.classList.remove(`item--not-valid-ru`);
    it.classList.remove(`item--not-valid-en`);
  });
};
itemsFrom.forEach(it => it.addEventListener(`click`, removerValidate));

const errorItem = () => {
  const inputs = validity.getStatusInput();
  inputs.forEach(it => {
  it.status === false ? it.el.parentNode.classList.add(`item--not-valid-${localStorage.getItem(`language`)}`) : null;
  });
};

const successSend = () => {
  validity.clearInpits();
  buttonSubmit.disabled = true;
  removerValidate();
  localStorage.getItem(`language`) == RU
    ? alert("Спасибо, мы приняли Вашу заявку и скоро с Вами свяжемся")
    : alert("Thank you, we have accepted your application and will contact you shortly");
};

const onClickButtonSend = () => {
  if (validity.checkValidity() === true) {
    const value = validity.getValue();
    const msg =
      `
      <h1 style="font-family: 'Verdana';">Зявка с сайта</h1>
      <div style="font-family: 'Verdana'; margin-left: 20px;">
        <div>Имя: <b>${value.name}</b></div>
        <div>Номер телефона:<b>${value.phone}</b></div>
        <div>Оставил заявку на сайте</div>
      </div>
      <hr>
      <div style="font-style: italic;">Заявка была сделана с <b>${localStorage.getItem(`language`) == RU ? `русской` : `английской`}</b> версии сайта</div>
    `;
    const data = new FormData();
    data.append(`msg`, msg);
    sendMail({
      data: data,
      responseOk: successSend(),
    });
  } else {
    errorItem();
  }
};
buttonSubmit.addEventListener(`click`, onClickButtonSend);


//Get data json
const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const indexURL = data.dir + "/database/page/index/index.json";
    const mashineURL = data.dir + "/database/page/index/mashine.json";
    const costUrl = data.dir + "/database/page/index/cost.json";

    //INDEX data
    sendRequest('GET', indexURL)
      .then(data => {


        imgRecord({
          selector: `.js-option-product__img--R-1300`,
          img: ``,
          picture: [data.cover.R1300.desktop],
        });
        imgRecord({
          selector: `.js-option-product__img--R-800`,
          img: ``,
          picture: [data.cover.R800.desktop],
        });
        const changeLang = (data) => {
          sliderProduct.removeAllSlides();
          data.slider.forEach(it => {
            sliderProduct.appendSlide(productionSlide({
              title: it[`index_swiper_title_${localStorage.getItem(`language`)}`],
              description: it[`index_swiper_description_${localStorage.getItem(`language`)}`],
              imgDesktop: it.index_swiper_img.desktop,
              imgTable: it.index_swiper_img.table,
            }))
          });
          const onSlideChange = () => {
            const length = sliderProduct.slides.length - 2;
            const activSlide =
              sliderProduct.activeIndex > length
                ? 1
                : sliderProduct.activeIndex < 1
                  ? length
                  : sliderProduct.activeIndex;
            document.querySelector(`.production__span--activ`).textContent = String(activSlide).length == 1 ? `0` + activSlide : activSlide;
            document.querySelector(`.production__span--slides`).textContent = String(length).length == 1 ? `0` + length : length;
          }

          onSlideChange();

          sliderProduct.on(`slideChange`, onSlideChange);
        };
        changeLang(data);

        //slider generate
        store.subscribe(() => {
          if (store.getState() == `language`) {
            changeLang(data);
          }
        });

        videoId({ name: `production`, id: data.video.id, start: data.video.start, end: data.video.end });

      })
      .catch(err => console.log(err));

    //MASHINE data
    sendRequest('GET', mashineURL)
      .then(data => {


        const changeMashie = () => {
          const mashine = data[sessionStorage.getItem(`mashine`)];
          carusel.removeAllSlides();
          caruselThumbs.removeAllSlides();
          mashine.slideImg.forEach(it => {
            carusel.appendSlide(characteristicMainSlide(it.desktop));
            caruselThumbs.appendSlide(characteristicThumbsSlide(it.desktop));
          });
          carusel.slideTo(2, 1, false);
          changeTextContent(mashine.characteristics);
        };
        //IN GET DATA Mashine
        changeMashie();
        store.subscribe(() => {
          if (store.getState() == `mashine`) {
            changeMashie();
          }
        });

        //Popup photo
        const buttonPhotoOpen = document.querySelector(`.carousel__button--popup`);
        const onClickPhoto = () => {
          popupPhoto.open();
          popupPhoto.creatSlider(data[sessionStorage.getItem(`mashine`)].slideImg, carusel.activeIndex);
        };
        buttonPhotoOpen.addEventListener(`click`, onClickPhoto);

        const changeId = () => {
          videoId(
            {
              name: `carousel`,
              id: data[sessionStorage.getItem(`mashine`)].video.id,
              start: data[sessionStorage.getItem(`mashine`)].video.start,
              end: data[sessionStorage.getItem(`mashine`)].video.end
            });
        };

        changeId();
        //Popup video
        const buttonVideoCarouselOpen = document.querySelector(`.carousel__button--watch`);
        const buttonVideoProductionOpen = document.querySelector(`.production__button--watch`);
        const onClickGalary = () => {
          popupVideo.open();
          popupVideo.videoRecord(buttonVideoCarouselOpen);
        };
        buttonVideoCarouselOpen.addEventListener(`click`, onClickGalary);
        buttonVideoProductionOpen.addEventListener(`click`, onClickGalary);

        store.subscribe(() => {
          if (store.getState() == `mashine`) {
            changeId();
          };
        });

      })
      .catch(err => console.log(err));

    //COST data
    sendRequest('GET', costUrl)
      .then(data => {


        const changeCost = (data) => {
          const cost = document.querySelector(`#cost`);
          switch (sessionStorage.getItem(`complect`)) {
            case BASE:
              cost.textContent = data[sessionStorage.getItem(`mashine`)].split(/(?=(?:...)*$)/).join(` `);
              break;
            case OPTIONS:
              cost.textContent = data[OPTIONS].split(/(?=(?:...)*$)/).join(` `);
              break;
            case FULL:
              cost.textContent = String(Number(data[sessionStorage.getItem(`mashine`)]) + Number(data[OPTIONS])).split(/(?=(?:...)*$)/).join(` `);
              break;

            default:
              break;
          }
        }

        changeCost(data);

        store.subscribe(() => {
          if (store.getState() == `mashine` || store.getState() == `complect`) {
            changeCost(data);
          }
        });


      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });