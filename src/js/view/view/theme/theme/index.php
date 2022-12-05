<?php get_header(); ?>

<!-- MAIN -->
<main class="main" data-page="index">

  <div class="background-video">
    <video class="background-video__video" loading="lazy" autoplay="autoplay" loop="loop" muted="muted" playsinline
      id="background_video">
    </video>
  </div>

  <!-- AVIAILABILITY SECTION -->
  <section class="aviailability">
    <div class="aviailability__main">
      <h1 class="aviailability__title" data-lang="mainTitleLang">
        Профессиональное <br> оборудование <span class="span--green">для <br> монтажа сыпучих <br> утеплителей</span>
      </h1>
      <span class="aviailability__span--in-stock" data-lang="mainDescriptionLang">В наличии выдувные установки
        производительностью
        800кг/ч и 1300 кг/ч</span>
      <div class="purchase aviailability__purchase">
        <button class="button purchase__button purchase__button--order button-green--hover-focus" type="button"
          data-lang="buttonOrderLang">Заказать</button>
        <button class="button purchase__button purchase__button--buy button-transparent--hover-focus" type="button"
          data-lang="buttonBuyLang" data-nodeLang="ru">Купить в кредит</button>
        <button
          class="button purchase__button purchase__button--partner button-transparent--hover-focus button--partner"
          type="button" data-lang="headerButtonPartnerLang" data-nodeLang="en">Стать партнером</button>
      </div>
    </div>
    <form class="aviailability__products option-product">
      <fieldset class="option-product__fieldset">
        <ul class="option-product__list">
          <li class="option-product__item">
            <input class="visually-hidden option-product__radio" type="radio" name="aviailability--option-product"
              id="R-1300" checked>
            <label class="option-product__label" for="R-1300" tabindex="0">
              <picture class="option-product__picture js-option-product__img--R-1300">
                <source srcset="" media="(min-width: 1280px)">
                <img class="option-product__img" src="" alt="R-1300">
              </picture>
              <span class="option-product__span">R-1300</span>
              <svg class="option-product__svg--background" viewBox="0 0 260 157">
                <use xlink:href=""></use>
              </svg>
              <svg class="option-product__svg--triangle">
                <use xlink:href=""></use>
              </svg>
            </label>
          </li>
          <li class="option-product__item">
            <input class="visually-hidden option-product__radio" type="radio" name="aviailability--option-product"
              id="R-800">
            <label class="option-product__label" for="R-800" tabindex="0">
              <picture class="option-product__picture js-option-product__img--R-800">
                <source srcset="" media="(min-width: 1280px)">
                <img class="option-product__img" src="" alt="R-800">
              </picture>
              <span class="option-product__span">R-800</span>
              <svg class="option-product__svg--background" viewBox="0 0 260 157">
                <use xlink:href=""></use>
              </svg>
              <svg class="option-product__svg--triangle">
                <use xlink:href=""></use>
              </svg>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  </section>
  <!-- END AVIAILABILITY SECTION -->

  <!-- CHARACTERISTIC SECTION -->
  <section class="characteristic">
    <div class="characteristic__description">
      <span class="characteristic__span--title" data-lang="productBlockTitleLang">Выдувная установка для <br> монтажа
        сыпучих
        утеплителей</span>
      <div class="characteristic__model">
        <span class="characteristic__span--model" data-mashine-content="name">R-1300</span>
        <button class="button characteristic__button button-transparent--hover-focus "
          data-lang="productBlockCertificateLang" type="button">Сертификат</button>
      </div>
      <ul class="characteristic__list">
        <li class="characteristic__item">
          <span class="characteristic__span--key" data-lang="productBlockPerformanceKeyLang">Производительность</span>
          <span class="characteristic__span--value" data-wp-content="performance">1300 </span>
          <span class="characteristic__span--value" data-lang="valuesSpeedLang">кг/ч</span>
        </li>
        <li class="characteristic__item">
          <span class="characteristic__span--key" data-lang="productBlockSizeKeyLang">Габариты</span>
          <span class="characteristic__span--value size">
            <span data-wp-content="dimensions_length">770</span>x<span
              data-wp-content="dimensions_width">940</span>x<span data-wp-content="dimensions_height">1560</span>
          </span>
          <span class="characteristic__span--value" data-lang="valuesMillimeterLang">мм</span>
        </li>
        <li class="characteristic__item">
          <span class="characteristic__span--key" data-lang="productBlockGuaranteeKeyLang">Гарантия</span>
          <span class="characteristic__span--value" data-wp-content="guarantee">12 </span>
          <span class="characteristic__span--value" data-lang="valuesMonthLang">месяцев</span>
        </li>
      </ul>
      <div class="characteristic__carousel">
        <div class="carousel">
          <!-- Slider main container -->
          <div class="swiper carousel__swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
            </div>
            <button class="button carousel__button--popup">
              <span class="visually-hidden">Открыть фото</span>
              <svg class="carousel__svg--popup">
                <use xlink:href=""></use>
              </svg>
            </button>
          </div>
          <div class="carousel__wrapper--thumbs">
            <!-- Slider thumbs -->
            <div class="swiper carousel__swiper--thumbs">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
              </div>
            </div>
            <button class="carousel__button-swiper carousel__button-swiper--left button" type="button">
              <svg class="carousel__svg--button svg__swiper-button">
                <use xlink:href=""></use>
              </svg>
            </button>
            <button class="carousel__button-swiper carousel__button-swiper--right button" type="button">
              <svg class="carousel__svg--button svg__swiper-button">
                <use xlink:href=""></use>
              </svg>
            </button>
          </div>
          <button class="button carousel__button--watch" data-wp-video="carousel">
            <svg class="carousel__svg--watch">
              <use xlink:href=""></use>
            </svg>
            <span class="carousel__span" data-lang="productBlockButtonWatchLang">Обзор <br> установки</span>
          </button>
        </div>

      </div>
      <form class="characteristic__equipment form">
        <fieldset class="form__fieldset">
          <legend class="form__legend" data-lang="productBlockEquipmentTitleLang">Комплектация</legend>
          <ul class="form__list">
            <li class="form__item">
              <div class="form__wrapper-radio">
                <input class="form__radio visually-hidden" type="radio" name="radio" id="form--base" checked>
                <label class="form__label" for="form--base">
                  <div class="complect--title">
                    <span class="form__span--label" data-lang="productBlockLowEquipmentTitleLang">Базовая
                      комлектация</span>
                  </div>
                  <div class="form__wrapper-svg">
                    <svg class="form__svg--radio">
                      <use xlink:href=""></use>
                    </svg>
                  </div>
                </label>
                <p class="form__paragraph">
                  <span data-input-id="form--base">
                    <span class="form__span" data-mashine-content="name">R-1300</span>
                    <span class="" data-lang="productBlockLowEquipmentValueLang">| Пульт | Шланг</span>
                  </span>
                </p>
              </div>
              <button class="button form__button--info form__button--info--basic" type="button">
                <span class="visually-hidden">Информация о Комплектации</span>
                <svg class="form__svg">
                  <use xlink:href=""></use>
                </svg>
              </button>
            </li>
            <li class="form__item">
              <div class="form__wrapper-radio">
                <input class="form__radio visually-hidden" type="radio" name="radio" id="form--options">
                <label for="form--options" class="form__label">
                  <div class="complect--title">
                    <span class="form__span--label" data-lang="productBlockMidEquipmentTitleLang">
                      Опция: комплект влажного нанесения
                    </span>
                  </div>
                  <div class="form__wrapper-svg">
                    <svg class="form__svg--radio">
                      <use xlink:href=""></use>
                    </svg>
                  </div>
                </label>
                <p class="form__paragraph">
                  <span data-input-id="form--options">
                    <span data-lang="productBlockMidEquipmentValueLang">Насос | Сопло | Скребок</span>
                  </span>
                </p>
              </div>
              <button class="button form__button--info form__button--info--option" type="button">
                <span class="visually-hidden">Информация о Комплектации</span>
                <svg class="form__svg">
                  <use xlink:href=""></use>
                </svg>
              </button>
            </li>
            <li class="form__item">
              <div class="form__wrapper-radio">
                <input class="form__radio visually-hidden" type="radio" name="radio" id="form--full">
                <label for="form--full" class="form__label">
                  <div class="complect--title">
                    <span data-mashine-content="name">R-1300</span>
                    <span class="form__span--label" data-lang="productBlockHightEquipmentTitleLang">+ комплект влажного
                      нанесения</span>
                  </div>
                  <div class="form__wrapper-svg">
                    <svg class="form__svg--radio">
                      <use xlink:href=""></use>
                    </svg>
                  </div>
                </label>
                <p class="form__paragraph">
                  <span data-input-id="form--full">
                    <span class="form__span " data-mashine-content="name">R-1300</span>
                    <span data-lang="productBlockHightEquipmentValueLang">| Пульт | Шланг | Насос | Сопло |
                      Скребок</span>
                  </span>
                </p>
              </div>
              <button class="button form__button--info form__button--info--full" type="button">
                <span class="visually-hidden">Информация о Комплектации</span>
                <svg class="form__svg">
                  <use xlink:href=""></use>
                </svg>
              </button>
            </li>
          </ul>
          <div class="form__cost">
            <span class="form__span--title " data-lang="productBlockCostTitleLang">Цена</span>
            <span class="form__span--cost">
              <span id="cost">409 000</span>
              ₽
            </span>
          </div>
          <div class="form__purchase purchase">
            <button class="button purchase__button purchase__button--order button-green--hover-focus "
              data-lang="buttonOrderLang" type="button">Заказать</button>
            <button class="button purchase__button purchase__button--buy button-transparent--hover-focus "
              data-lang="buttonBuyLang" type="button" data-nodeLang="ru">Купить в кредит</button>
            <button
              class="button purchase__button purchase__button--partner button-transparent--hover-focus button--partner"
              data-lang="headerButtonPartnerLang" type="button" data-nodeLang="en">Стать партнером</button>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="characteristic__table table">
      <span class="table__span " data-lang="characteristicsBlockTitleLang">Все характеристики</span>
      <div class="table__wrap">
        <dl class="table__list">
          <dt class="table__term " data-lang="characteristicsBlockPerformanceLang">Производительность</dt>
          <dd class="table__definition">
            <span data-wp-content="performance">1300 </span>
            <span class="" data-lang="valuesSpeedLang">кг/ч</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockPowerLang">Мощность</dt>
          <dd class="table__definition">
            <span data-wp-content="power">3,2 </span>
            <span class="" data-lang="valuesPowerLang">кВт</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockSupplyLang">Электропитание</dt>
          <dd class="table__definition">
            <span data-wp-content="voltage">220</span><span data-lang="valuesVoltageLang">В</span>/<span
              data-wp-content="frequency">50</span><span class="" data-lang="valuesOscillationLang">Гц</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockTurbineLang">Турбина Ametek Lamb</dt>
          <dd class="table__definition">
            <span data-wp-content="turbine">1,7</span>
            <span class="" data-lang="valuesPowerLang">кВт</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockDimensionsLang">Габариты ДхШхВ</dt>
          <dd class="table__definition">
            <span class="size">
              <span data-wp-content="dimensions_length">770</span>x<span
                data-wp-content="dimensions_width">940</span>x<span
                data-wp-content="dimensions_height">1560</span></span>
            <span class="" data-lang="valuesMillimeterLang">мм</span>
          </dd>
        </dl>
        <dl class="table__list">
          <dt class="table__term " data-lang="characteristicsBlockMassLang">Масса</dt>
          <dd class="table__definition">
            <span data-wp-content="mass">185</span>
            <span class="" data-lang="valuesMassLang">кг</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockHoseLang">Шланг (в комплекте) Д х <span
              class="table__span--diameter">⌀</span></dt>
          <dd class="table__definition">
            <span data-wp-content="length">30</span><span class="" data-lang="valuesMeterLang">м</span>
            <span>х </span>
            <span data-wp-content="diameter">76</span><span class="" data-lang="valuesMillimeterLang">мм</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockLiftLang">Высота подъема</dt>
          <dd class="table__definition">
            <span class="" data-lang="valuesUpToLang">до </span>
            <span data-wp-content="height">30</span>
            <span class="" data-lang="valuesMeterLang">м</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockDistanceLang">Дальность подачи</dt>
          <dd class="table__definition ">
            <span class="" data-lang="valuesUpToLang">до </span>
            <span data-wp-content="range">120</span>
            <span class="" data-lang="valuesMeterLang">м</span>
          </dd>
          <dt class="table__term " data-lang="characteristicsBlockConsoleLang">Пульт управления (в комплекте)</dt>
          <dd class="table__definition">
            <span class="" data-lang="valuesRemoteLang">Дистанционный</span>
            <span data-wp-content="control">100</span>
            <span class="" data-lang="valuesMeterLang">м</span>
          </dd>
        </dl>
      </div>
    </div>
  </section>
  <!-- END CHARACTERISTIC SECTION -->

  <!-- ADVANTAGE SECTION -->
  <section class="advantage">
    <h2 class="advantage__title--h2 title--h2 " data-lang="mainTitleAdvantageLang">
      Все
      <span class="span--green">преимущества</span>
      иностранного оборудования
      <span class="span--green">российского производства</span>
    </h2>
    <ul class="advantage__list">
      <li class="advantage__item">
        <div class="advantage__wrapper--item-content">
          <picture class="advantage__img" data-mashine-img="img_1">
            <source srcset="" media="(min-width: 1440px)">
            <source srcset="" media="(min-width: 1024px)">
            <img class="advantage__img js-advantage__img--1" src="" alt="Высокотехнологичный станок">
          </picture>
          <div class="advantage__wrapper--description">
            <h3 class="advantage__title--h3" data-mashine-content="title_1">
              Изготовление <br> на
              высокотехнологичных <br>
              станках</h3>
            <span class="advantage__span" data-mashine-content="description_1">
              При изготовлении наших выдувных установок используются самые точные и технологичные швейцарские и немецкие
              станки с роботизированными процессами
            </span>
          </div>
        </div>
      </li>
      <li class="advantage__item">
        <div class="advantage__wrapper--item-content">
          <picture class="advantage__img" data-mashine-img="img_2">
            <source srcset="" media="(min-width: 1440px)">
            <source srcset="" media="(min-width: 1024px)">
            <img class="advantage__img js-advantage__img--2" src="" alt="Турбина">
          </picture>
          <div class="advantage__wrapper--description">
            <h3 class="advantage__title--h3" data-mashine-content="title_2">
              Система подачи воздуха<br> Twin turbo
            </h3>
            <span class="advantage__span" data-mashine-content="description_2">
              Две 3-stage турбины высокой мощности обеспечивают необходимую плотность укладки, дальность подачи и
              скорость монтажа изоляции
            </span>
          </div>
        </div>
      </li>
      <li class="advantage__item">
        <div class="advantage__wrapper--item-content advantage__wrapper--left">
          <picture class="advantage__img" data-mashine-img="img_3">
            <source srcset="" media="(min-width: 1440px)">
            <source srcset="" media="(min-width: 1024px)">
            <img class="advantage__img js-advantage__img--3" src="" alt="Управление">
          </picture>
          <div class="advantage__wrapper--description">
            <h3 class="advantage__title--h3" data-mashine-content="title_3">Интуитивно понятное управление</h3>
            <span class="advantage__span" data-mashine-content="description_3">
              Простое и удобное управление всеми функциями выдувной машины доступно как с панели, так и с помощью
              радиопульта. Вы сможете дистанционно попроцентно регулировать подачу воздуха
            </span>
          </div>
        </div>
      </li>
      <li class="advantage__item">
        <div class="advantage__wrapper--item-content advantage__wrapper--left">
          <picture class="advantage__img" data-mashine-img="img_4">
            <source srcset="" media="(min-width: 1440px)">
            <source srcset="" media="(min-width: 1024px)">
            <img class="advantage__img js-advantage__img--4" src="" alt="Кострукция">
          </picture>
          <div class="advantage__wrapper--description">
            <h3 class="advantage__title--h3" data-mashine-content="title_4">Продуманная и надежная конструкция</h3>
            <span class="advantage__span" data-mashine-content="description_4">
              Двухуровневая система модульных разрыхлителей обеспечивает максимально эффективное распушение материала. А
              благодаря удобной конструкции, можно получить доступ к любому механизму для технического обслуживания
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <!-- END ADVANTAGE SECTION -->

  <!-- production SECTION -->
  <section class="production">
    <h2 class="production__title title--h2 " data-lang="mainTitleProductionLang">
      Главное - детали. <br>
      <span class="span--green">Процесс производства</span>
      выдувных установок
    </h2>

    <div class="production__navigation">
      <div class="production__slides-number">
        <span class="production__span--activ">01</span>
        <div class="production__line"></div>
        <span class="production__span--slides">?</span>
      </div>
      <button class="button production__button--watch" data-wp-video="production">
        <svg class="production__svg--watch">
          <use xlink:href=""></use>
        </svg>
        <p class="production__text">
          <span data-lang="mainSliderButtonWatchLang">Смотреть</span>
          <span class="production__span--mobile-none" data-lang="mainSliderButtonWhatLang">видео производства</span>
        </p>
      </button>
    </div>

    <div class="production__slider">
      <!-- Slider main container -->
      <div class="slider__wrapper--buttons">
        <div class="slider__blank"></div>
        <div class="slider__buttons">
          <button class="slider-product__button--prev button">
            <svg class="slider-product__svg--button svg__swiper-button">
              <use xlink:href=""></use>
            </svg>
          </button>
          <button class="slider-product__button--next button">
            <svg class="slider-product__svg--button svg__swiper-button">
              <use xlink:href=""></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="swiper slider-product">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper slider-product__wrapper">
        </div>
      </div>
    </div>
    </div>
  </section>
  <!-- END production SECTION -->

  <!-- ABOUT-US SECTION -->
  <section class="about-us">
    <h2 class="about-us__title title--h2 " data-lang="mainTitleAboutCompanyLang">
      <span class="span--green"> Проверенное оборудование</span> <br>
      для эффективной работы <br>
      наших клиентов
    </h2>
    <ul class="about-us__list">
      <li class="about-us__item">
        <picture class="about-us__img js-about-us__img--workers about-us--left">
          <source srcset="" media="(min-width: 1440px)">
          <source srcset="" media="(min-width: 1024px)">
          <img class="about-us__img about-us--left" src="" alt="наше производство">
        </picture>
      </li>
      <li class="about-us__item">
        <div class="about-us__description">
          <p class="about-us__paragraph about-us__paragraph--title1 " data-lang="descriptionTitle1Lang">
            С
            <span class="about-us__span--big1">2017</span> <br>
            года
          </p>
          <div class="about-us__paragraph about-us__paragraph--title2 " data-lang="descriptionTitle2Lang">
            <span class="about-us__yp">свыше</span>
            <span class="about-us__span--big2">150</span>
            <span class="about-us__yp">клиентов</span>
          </div>
          <p class="about-us__paragraph about-us__paragraph--text " data-lang="descriptionAboutCompanyLang">
            Компания «РосТехноПрогресс» ® зарекомендовала себя как специалист по созданию качественных выдувных
            установок для монтажа сыпучих утеплителей. <br> <br>
            Коллосальный опыт, постоянное взаимодействие с клиентами, а также применение передовых технологий
            европейского и американского оборудования в разработке, сделали наши машины серии «R» удобными, понятными и
            надежными в эксплуатации <br> <br>
            в разных странах успешно используют наши установки. Присоединяйтесь и Вы
          </p>
        </div>
        <picture class="about-us__img js-about-us__img--production about-us__img--right">
          <source srcset="" media="(min-width: 1440px)">
          <source srcset="" media="(min-width: 1024px)">
          <img class="about-us__img about-us__img--right" src="" alt="наше производство">
        </picture>
      </li>
    </ul>
    <div class="about-us__wrapper">
    </div>
  </section>
  <!-- END ABOUT-US SECTION -->

  <!-- DELIVERY SECTION -->
  <section class="delivery">
    <h2 class="delivery__title title--h2 " data-lang="mainTitleDeliveryLang">
      <span class="span--green">Доставка</span> по всей <br>
      России и СНГ. <br>
      <span class="span--green">Оплата</span> при получении
    </h2>
    <span class="delivery__span " data-lang="descriptionDeliveryLang">
      Доставка выдувных установок доступна с помощью любой транспортной компании или нашего автопарка. Для вашего
      удобства возможна наличная и безналичная оплата заказа
    </span>
    <picture class="delivery__img js-delivery__img">
      <source srcset="" media="(min-width: 1440px)">
      <source srcset="" media="(min-width: 1024px)">
      <img class="delivery__img" src="" alt="car">
    </picture>
    <a class="button delivery__link button-transparent--hover-focus " data-lang="mainButtonDeliveryLang"
      href="./delivery.html">Доставка и оплата</a>
  </section>
  <!-- END DELIVERY SECTION -->

  <!-- ORDER SECTION -->
  <section class="order">
    <h2 class="order__title title--h2 " data-lang="mainTitleOrderLang">
      Начать просто.
      <span class="span--green">Закажите</span><br>
      надежную профессиональную
      <span class="span--green">выдувную установку</span>
    </h2>
    <div class="order__form">
      <ul class="order__list">
        <li class="order__item">
          <input class="order__input" name="Поле ввода имени" placeholder="Имя" data-input="name"
            data-placeholder="name" data-placeholder="name" required>
        </li>
        <li class="order__item">
          <input class="order__input" name="Поле ввода телефона" placeholder="Номер телефона" data-input="phone"
            data-placeholder="phone" required>
        </li>
        <li class="order__item">
          <button class="button order__button button-green--hover-focus button--add "
            data-lang="mainButtonOrderLang">Заказать</button>
        </li>
      </ul>
    </div>
  </section>
  <!-- END ORDER SECTION -->

</main>
<!-- END MAIN -->

  <?php
get_footer();