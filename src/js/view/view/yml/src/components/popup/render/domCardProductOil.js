import { getNode } from "../../utils/getNode/getNode";

export const domCardProductOil = getNode(
  `<section class="card-product card-product--oil card-product--hide">
  <div class="card-product__content">
    <svg class="card-product__wave--main" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490"
      version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path style="transform:translate(0, 0px); opacity:1" fill="#ffffff"
        d="M0,343L80,343C160,343,320,343,480,334.8C640,327,800,310,960,277.7C1120,245,1280,196,1440,196C1600,196,1760,245,1920,294C2080,343,2240,392,2400,367.5C2560,343,2720,245,2880,171.5C3040,98,3200,49,3360,40.8C3520,33,3680,65,3840,114.3C4000,163,4160,229,4320,261.3C4480,294,4640,294,4800,253.2C4960,212,5120,131,5280,98C5440,65,5600,82,5760,81.7C5920,82,6080,65,6240,81.7C6400,98,6560,147,6720,147C6880,147,7040,98,7200,81.7C7360,65,7520,82,7680,147C7840,212,8000,327,8160,318.5C8320,310,8480,180,8640,179.7C8800,180,8960,310,9120,367.5C9280,425,9440,408,9600,367.5C9760,327,9920,261,10080,245C10240,229,10400,261,10560,228.7C10720,196,10880,98,11040,49C11200,0,11360,0,11440,0L11520,0L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z">
      </path>
    </svg>
    <button class="card-product__button--close button">
      <span class="visually-hidden">закрыть popup</span>
      <svg class="card-product__svg--close">
        <use xlink:href=""></use>
      </svg>
    </button>
    <div class="card-product__slider">
      <!-- Slider main container -->
      <div class="swiper card-product__swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
        </div>
      </div>
      <div class="card-product__wrapper--thumbs">
        <!-- Slider thumbs -->
        <div class="swiper card-product__swiper--thumbs">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
          </div>
        </div>
        <button class="card-product__button-swiper card-product__button-swiper--left button" type="button">
          <svg class="card-product__svg--button">
            <use xlink:href=""></use>
          </svg>
        </button>
        <button class="card-product__button-swiper card-product__button-swiper--right button" type="button">
          <svg class="card-product__svg--button">
            <use xlink:href=""></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="card-product__description">
      <svg class="card-product__wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490"
        version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path style="transform:translate(0, 0px); opacity:1" fill="#ffffff"
          d="M0,343L80,343C160,343,320,343,480,334.8C640,327,800,310,960,277.7C1120,245,1280,196,1440,196C1600,196,1760,245,1920,294C2080,343,2240,392,2400,367.5C2560,343,2720,245,2880,171.5C3040,98,3200,49,3360,40.8C3520,33,3680,65,3840,114.3C4000,163,4160,229,4320,261.3C4480,294,4640,294,4800,253.2C4960,212,5120,131,5280,98C5440,65,5600,82,5760,81.7C5920,82,6080,65,6240,81.7C6400,98,6560,147,6720,147C6880,147,7040,98,7200,81.7C7360,65,7520,82,7680,147C7840,212,8000,327,8160,318.5C8320,310,8480,180,8640,179.7C8800,180,8960,310,9120,367.5C9280,425,9440,408,9600,367.5C9760,327,9920,261,10080,245C10240,229,10400,261,10560,228.7C10720,196,10880,98,11040,49C11200,0,11360,0,11440,0L11520,0L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z">
        </path>
      </svg>
      <h3 class="card-product__title" data-lang="essentialOilRU">Эфирное масло</h3>
      <span class="card-product__span--name">Кориандровое</span>
      <h3 class="card-product__title" data-lang="essentialOilEn"></h3>
      <span class="card-product__span--material">из зерна</span>
      <span class="card-product__span--description text-description">
        Бесцветная или светло-желтая жидкость, имеет сладковатый, душистый, древесно-пряный аромат с бальзамическими и
        цветочными нотами
      </span>
      <p class="card-product__paragraph--compound">
        <span class="card-product__span--title" data-lang="composition">Состав</span>
        <span class="card-product__span--compound text-description">Линалоол, гераниол, децилальдегид, борнеол, карвон,
          кориандрол,
          пинен,
          фелландрен, дипентен, терпинен, цимен и др.</span>
      </p>
      <button class="card-product__button--order button button--fill" type="submit" data-lang="order">Заказать</button>
    </div>
    <div class="card-product__info info">
      <!-- package button -->
      <div class="info__checkbox">
        <input class="info__input visually-hidden" type="checkbox" name="info-checkbox" id="oilcheckbox1"
          data-info="package">
        <label class="info__label" for="oilcheckbox1">
          <span class="info__span--button" data-lang="packaging">Варианты упаковок</span>
          <div class="info__button info__button--packaging button">
            <div class="info__cross"></div>
          </div>
        </label>
      </div>
      <!-- package button END-->
      <!-- package content-->
      <div class="info__reticle info__reticle--package" data-info="package">
        <div class="info__package">
          <div class="info__block--content">
            <div class="info__wrapper--photo">
              <img class="info__img info__img--glass" src="" alt="">
              <span class="info__span--number">01</span>
            </div>
            <h4 class="info__title--package" data-lang="glassPackaging">Стеклянная и пластиковая тара</h4>
            <span class="text-description" data-lang="glassPackagingCharacteristics">от 10 мл до 10 кг</span>
          </div>
          <div class="info__block--content">
            <div class="info__wrapper--photo">
              <img class="info__img info__img--barrel" src="" alt="">
              <span class="info__span--number">02</span>
            </div>
            <h4 class="info__title--package" data-lang="steelBarrel">Стальная закатная бочка</h4>
            <span class="text-description" data-lang="steelBarrelCharacteristics">вместимостью 180 кг</span>
          </div>
        </div>
      </div>
      <!-- package content END-->

      <!-- certificate button -->
      <div class="info__checkbox">
        <input class="info__input visually-hidden" type="checkbox" name="info-checkbox" id="oilcheckbox2"
          data-info="certificate">
        <label class="info__label" for="oilcheckbox2">
          <span class="info__span--button" data-lang="certificateOfQuality">Сертификат качества</span>
          <div class="info__button info__button--packaging button">
            <div class="info__cross"></div>
          </div>
        </label>
      </div>
      <!-- certificate button END-->
      <!-- certificate content-->
      <div class="info__reticle" data-info="certificate">
        Сертификат
      </div>
      <!-- certificate content END-->
    </div>
  </div>
</section>`
)