import "../styles/scss/style.scss";
import 'swiper/css/bundle';
import "./parts/header.js";
import "./parts/footer.js";
import "./currentItems/currentItems";

import { render } from "./render/render";
import { svgRecord } from "./img/svgRecord";
import { popup as cardProduct } from "./parts/cardProduct";
import { sendRequest } from "./sendRequest/sendRequest";

const dirURL = '/dir.json';
const IMG_WIDTH = 1280;

const product = (id, data) => {
  return (
    `
    <div class="catalog__product" data-id="${id}" data-type="${data._type}">
      <div class="catalog__wrapper--img">
        <img class="catalog__img catalog__img--main" src="${
          window.innerWidth > IMG_WIDTH
          ? data.image_main.desktop
          : data.image_main.table
        }" alt="${data.title_name}">
        <img class="catalog__img catalog__img--hover" src="${
          window.innerWidth > IMG_WIDTH
          ? data.image_hover.desktop
          : data.image_hover.table}" alt="${data.title_name}">
      </div>          
      <span class="catalog__span--name">“${data.title_name}”</span>
      <span class="catalog__span--cake">${data._type == `cheesecakes` ? `cheesecake` : `cake`}</span>
    </div>
    `
  )
};
const catalogConteiner = document.querySelector(`.catalog`);

sendRequest('GET', dirURL)
  .then(data => {
    const productURL = data.dir + "/database/product.json"
    sendRequest('GET', productURL)
      .then(data => {        
        const spanEmpty = document.querySelector(`.catalog__span--empty`);
        spanEmpty.style.display = `none`;
        Object.entries(data).forEach(it => {
          const [name, properties] = it;
          if (Object.keys(properties).length == 0) {
            delete data[name];
          };
        });
        const arrData = Object.entries(data);
        const radioTemplate = (product) => {
          return (
            `<li class="catalog__item">
              <input class="visually-hidden catalog__radio" type="radio" name="radio" id="catalog__radio-${product}">
              <label class="catalog__label" for="catalog__radio-${product}">
                <span class="catalog__span">${product}</span>
              </label>
            </li>`
          )
        };
        const renderProduct = (productObj) => {
          const catalogContent = document.querySelector(`.catalog__content`);
          catalogContent.innerHTML = ``;
          Object.entries(productObj).forEach(it => {
            const [id, data] = it;
            render(catalogContent, `beforeend`, product(id, data));
          });
        };
        const radioConteiner = document.querySelector(`.catalog__list`);
        arrData.forEach(it => {
          const [name] = it;
          render(radioConteiner, `beforeend`, radioTemplate(name));
        });
        const radio = document.querySelectorAll(`.catalog__radio`);
        radio.forEach((it, i) => {
          it.addEventListener(`change`, () => {
            const [, prod] = arrData[i];
            renderProduct(prod);
          });
        });
        const [firstRadio] = radio;
        if (firstRadio != undefined) {
          firstRadio.checked = true;
          const [, prod] = arrData[0];
          renderProduct(prod);
          const onClickCatalog = (e, products) => {
            e.composedPath().forEach(it => {
              if (it !== document && it !== window && it.classList.contains(`catalog__product`)) {
                const sliderImg = 
                window.innerWidth > IMG_WIDTH
                  ? 
                  [
                    products[it.dataset.id].image_big.desktop, 
                    products[it.dataset.id].image_main.desktop, 
                    products[it.dataset.id].image_hover.desktop, 
                    ...products[it.dataset.id].slider.map(it => it.desktop)
                  ]
                  : 
                  [
                    products[it.dataset.id].image_big.table, 
                    products[it.dataset.id].image_main.table, 
                    products[it.dataset.id].image_hover.table, 
                    ...products[it.dataset.id].slider.map(it => it.table)
                  ];
                //defolt weight
                document.querySelector(`#card-product__radio-max`).checked = true;
                //open card
                cardProduct.open();
                cardProduct.changeContent({
                  name: products[it.dataset.id].title_name,
                  cake: products[it.dataset.id]._type,
                  description: products[it.dataset.id].description,
                  id: it.dataset.id,
                  type: it.dataset.type,
                  img: sliderImg,
                });
              };
            });
          };
          catalogConteiner.addEventListener(`click`, (e) => {
            const product = document.querySelector(`.${e.currentTarget.className} .catalog__product`).dataset.type;
            onClickCatalog(e, data[`${product}`]);
          });
        } else {
          const spanEmpty = document.querySelector(`.catalog__span--empty`);
          spanEmpty.style.display = `block`;
          const spanLoading = document.querySelector(`.catalog__span--loading`);
          spanLoading.style.display = `none`;
        };
      })
      .catch(err =>{
        console.log(err);
      });
  })
  .catch(err => console.log(err));



//Svg
svgRecord({
  selector: `.card-product__svg--close`,
  id: `arrowPopup`,
});
svgRecord({
  selector: `.card-product__svg--button`,
  id: `arrowPopup`,
});

svgRecord({
  selector: `.card-product__svg--scales`,
  id: `scales`,
});
svgRecord({
  selector: `.card-product__svg--package`,
  id: `bigPackage`,
});
svgRecord({
  selector: `.card-product__svg--box`,
  id: `box`,
});