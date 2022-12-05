import { Swiper } from 'swiper/bundle';
import { ToggleMenu } from '../toggleMenu/toggleMenu';
import { popupConstructor } from "../popup/popupConstructor";
import { domCardProduct } from "../popup/render/domCardProduct";
import { svgRecord } from '../img/svgRecord';
import { popup as popupPartner } from './popupPartner';
import { sendRequest } from '../sendRequest/sendRequest';

const IMG_WIDTH = 1280;

const body = document.querySelector(`body`);
body.appendChild(domCardProduct);

const buttonPartner = document.querySelector(`.card-product__button--order`);
const onClickButtonPartner = (e) => {
  e.preventDefault();
  popupPartner.open();
};
buttonPartner.addEventListener(`click`, onClickButtonPartner);

//swiper init
const swiperCard = new Swiper('.card-product__swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  loopedSlides: 2,
  spaceBetween: 10,
  centeredSlides: true,
});

const swiperThumbs = new Swiper('.card-product__swiper--thumbs', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 7,
  grabCursor: true,
  loopedSlides: 2,

  centeredSlides: true,
  slideToClickedSlide: true,
  slideActiveClass: 'card-product__slide--active',

  navigation: {
    nextEl: '.card-product__button-swiper--right',
    prevEl: '.card-product__button-swiper--left',
  },
});

swiperCard.controller.control = swiperThumbs;
swiperThumbs.controller.control = swiperCard;

//toggleMenu characteristics
const characteristicsMenu = new ToggleMenu({
  nameClass: `characteristics`,
});
const buttonCharacteristics = document.querySelector(`.characteristics__button`);
const onClickButtonCharacteristics = (e) => {
  e.preventDefault();
  characteristicsMenu.toggle();
};
buttonCharacteristics.addEventListener(`click`, onClickButtonCharacteristics);


//Init popup
export const popup = new popupConstructor({
  selector: `.card-product`,
  overflow: true,
  classShow: `card-product--show`,
  classHide: `card-product--hide`,
});

const cardProduct = document.querySelector(`.card-product`);
const cakeProduct = document.querySelector(`.card-product__title`);
const nameProduct = document.querySelector(`.card-product__span--name`);
const descriptionProduct = document.querySelector(`.card-product__span--description`);
const buttonClose = document.querySelector(`.card-product__button--close`);
const onClickButtonClose = (e) => {
  if (cardProduct.classList.contains(`card-product--show`)) {
    e.preventDefault();
    popup.close();
  };
};
buttonClose.addEventListener(`click`, onClickButtonClose);

//Add method changeContent
const appendSlide = (image) => {
  swiperCard.appendSlide(`      
      <div class="swiper-slide card-product__slide">
        <div class="card-product__wrapper--slide-content">
          <img class="card-product__slide--img slide1" src="${image}" alt="">
        </div>
      </div>
  `);
  swiperThumbs.appendSlide(`      
    <div class="swiper-slide card-product__slide card-product__slide--thumbs">
      <div class="card-product__wrapper--slide-content-thumbs">
        <img class="card-product__slide--img slide1" src="${image}" alt="">
      </div>
    </div>
  `);
};

const firstSlideInit = () => {
  swiperCard.slideTo(2, 1, false);
};

const generateSlides = (image) => {
  swiperCard.removeAllSlides();
  swiperThumbs.removeAllSlides();
  if (image !== undefined && Array.isArray(image)) {
    image.forEach(it => {
      appendSlide(it);
    });
  };
  firstSlideInit();
};

popup.addMethod(`changeContent`, ({
  cake,
  name,
  description,
  id,
  type,
  img,
}) => {
  cardProduct.dataset.id = id;
  cardProduct.dataset.type = type;
  cakeProduct.textContent = cake;
  nameProduct.textContent = `“${name}”`;
  descriptionProduct.textContent = description;
  generateSlides(img);
});

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const productURL = data.dir + "/database/product.json"
    sendRequest('GET', productURL)
      .then(data => {
        Object.entries(data).forEach(it => {
          const [name, properties] = it;
          if (Object.keys(properties).length == 0) {
            delete data[name];
          };
        });
        //Change packed box
        const inputsWeight = document.querySelectorAll(`.card-product__radio`);
        inputsWeight.forEach(it => {
          it.addEventListener(`change`, (e) => {
            const product = document.querySelector(`.card-product`).dataset.type;
            e.preventDefault();
            const id = document.querySelector(`.card-product`).dataset.id;
            const sliderImgBig = 
            window.innerWidth > IMG_WIDTH 
              ? 
              [
                data[`${product}`][id].image_big.desktop, 
                data[`${product}`][id].image_main.desktop, 
                data[`${product}`][id].image_hover.desktop, 
                ...data[`${product}`][id].slider.map(it => it.desktop)
              ]
              : 
              [
                data[`${product}`][id].image_big.table, 
                data[`${product}`][id].image_main.table, 
                data[`${product}`][id].image_hover.table, 
                ...data[`${product}`][id].slider.map(it => it.table)
              ];

            const sliderImgMid = 
            window.innerWidth > IMG_WIDTH 
              ? 
              [
                data[`${product}`][id].image_mid.desktop, 
                data[`${product}`][id].image_main.desktop, 
                data[`${product}`][id].image_hover.desktop, 
                ...data[`${product}`][id].slider.map(it => it.desktop)
              ]
              :
              [
                data[`${product}`][id].image_mid.table, 
                data[`${product}`][id].image_main.table, 
                data[`${product}`][id].image_hover.table, 
                ...data[`${product}`][id].slider.map(it => it.table)
              ];
            const sliderImgMin = 
            window.innerWidth > IMG_WIDTH 
              ?
              [
                data[`${product}`][id].image_min.desktop, 
                data[`${product}`][id].image_main.desktop, 
                data[`${product}`][id].image_hover.desktop, 
                ...data[`${product}`][id].slider.map(it => it.desktop)
              ]
              :
              [
                data[`${product}`][id].image_min.table, 
                data[`${product}`][id].image_main.table, 
                data[`${product}`][id].image_hover.table, 
                ...data[`${product}`][id].slider.map(it => it.table)
              ]
            switch (it.id) {
              case `card-product__radio-max`:
                generateSlides(sliderImgBig);
                svgRecord({
                  selector: `.card-product__svg--package`,
                  id: `bigPackage`,
                });
                document.querySelector(`.card-product__span--weight`).textContent = `0,125kg х 12 pices`;
                document.querySelector(`.card-product__span--packaging`).textContent = `Packaging`;
                document.querySelector(`.card-product__span--packet`).textContent = `Individual box`;
                document.querySelector(`.card-product__span--pices`).textContent = `4 packages`;
                break;
              case `card-product__radio-mid`:
                generateSlides(sliderImgMid);
                svgRecord({
                  selector: `.card-product__svg--package`,
                  id: `midPackage`,
                });
                document.querySelector(`.card-product__span--weight`).textContent = `0,5 kg х 2 pices`;
                document.querySelector(`.card-product__span--packaging`).textContent = `All products are packaged`;
                document.querySelector(`.card-product__span--packet`).textContent = `Individual box with window`;
                document.querySelector(`.card-product__span--pices`).textContent = `2 packages`;
                break;
              case `card-product__radio-min`:
                generateSlides(sliderImgMin);
                svgRecord({
                  selector: `.card-product__svg--package`,
                  id: `minPackage`,
                });
                document.querySelector(`.card-product__span--weight`).textContent = `0,14 kg х 6 pices`;
                document.querySelector(`.card-product__span--packaging`).textContent = `All products are packaged`;
                document.querySelector(`.card-product__span--packet`).textContent = `Individual clear round cake box`;
                document.querySelector(`.card-product__span--pices`).textContent = `6 packages`;
                break;
            };
          });
        });
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//Svg
svgRecord({
  selector: `.characteristics__svg--button`,
  id: `play`,
});
svgRecord({
  selector: `.characteristic__svg--storage`,
  id: `storage`,
});
svgRecord({
  selector: `.characteristic__svg--temperature`,
  id: `temperature`,
});
svgRecord({
  selector: `.characteristic__svg--expirationDate`,
  id: `expirationDate`,
});
svgRecord({
  selector: `.characteristic__svg--cold`,
  id: `cold`,
});
svgRecord({
  selector: `.characteristic__svg--temperatureСold`,
  id: `temperatureСold`,
});
svgRecord({
  selector: `.characteristic__svg--expirationDateCold`,
  id: `expirationDateCold`,
});
svgRecord({
  selector: `.characteristic__svg--heat`,
  id: `heat`,
});
svgRecord({
  selector: `.characteristic__svg--temperatureHeat`,
  id: `temperatureHeat`,
});
svgRecord({
  selector: `.characteristic__svg--expirationDateHeat`,
  id: `expirationDateHeat`,
});
svgRecord({
  selector: `.characteristic__svg--blastChilling`,
  id: `blastChilling`,
});
svgRecord({
  selector: `.characteristic__svg--defrostingProcess`,
  id: `defrostingProcess`,
});
svgRecord({
  selector: `.characteristic__svg--avoid`,
  id: `avoid`,
});