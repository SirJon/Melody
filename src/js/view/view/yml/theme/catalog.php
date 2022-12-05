<?php
/*
* Template name: catalog
*/
?>
<?php get_header(); ?>

<!-- MAIN -->
<main class="page__main" data-page="catalog">
  <!-- catalog section-->
  <section class="catalog">
    <h2 class="catalog__title title--page" data-lang="catalog">Каталог</h2>
    <ul class="catalog__list">
      <li class="catalog__item catalog__item--activ" data-lang="essentialOils">Эфирные масла</li>
      <li class="catalog__item">
        <a href="#spiceBlock" class="catalog__link catalog__link--anchor" data-lang="spices">Специи</a>
      </li>
    </ul>
    <article class="catalog__block catalog__block--oil">
      <h3 class="catalog__subtitle" data-lang="essentialOils">
        Эфирные масла
      </h3>
      <div class="catalog__wrapper--products"></div>
    </article>
    <article id="spiceBlock" class="catalog__block catalog__block--spice">
      <h3 class="catalog__subtitle" data-lang="spices">
        Специи
      </h3>
      <div class="catalog__wrapper--products"></div>
    </article>
  </section>
  <!-- END catalog section-->


  <!-- feedback section-->
  <section class="feedback feedback--big-padding">
    <svg class="wave--top" viewBox="0 0 1440 180" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path style="transform:translate(0, 0px); opacity:1" fill="#ffffff"
        d="M0,0L80,0C160,0,320,0,480,24C640,48,800,96,960,123C1120,150,1280,156,1440,132C1600,108,1760,54,1920,54C2080,54,2240,108,2400,120C2560,132,2720,102,2880,75C3040,48,3200,24,3360,15C3520,6,3680,12,3840,33C4000,54,4160,90,4320,102C4480,114,4640,102,4800,108C4960,114,5120,138,5280,138C5440,138,5600,114,5760,105C5920,96,6080,102,6240,99C6400,96,6560,84,6720,87C6880,90,7040,108,7200,114C7360,120,7520,114,7680,105C7840,96,8000,84,8160,93C8320,102,8480,132,8640,120C8800,108,8960,54,9120,27C9280,0,9440,0,9600,18C9760,36,9920,72,10080,99C10240,126,10400,144,10560,129C10720,114,10880,66,11040,66C11200,66,11360,114,11440,138L11520,162L11520,180L11440,180C11360,180,11200,180,11040,180C10880,180,10720,180,10560,180C10400,180,10240,180,10080,180C9920,180,9760,180,9600,180C9440,180,9280,180,9120,180C8960,180,8800,180,8640,180C8480,180,8320,180,8160,180C8000,180,7840,180,7680,180C7520,180,7360,180,7200,180C7040,180,6880,180,6720,180C6560,180,6400,180,6240,180C6080,180,5920,180,5760,180C5600,180,5440,180,5280,180C5120,180,4960,180,4800,180C4640,180,4480,180,4320,180C4160,180,4000,180,3840,180C3680,180,3520,180,3360,180C3200,180,3040,180,2880,180C2720,180,2560,180,2400,180C2240,180,2080,180,1920,180C1760,180,1600,180,1440,180C1280,180,1120,180,960,180C800,180,640,180,480,180C320,180,160,180,80,180L0,180Z">
      </path>
    </svg>
    <div class="feedback__content">
      <h2 class="feedback__title subtitle2">
        <span data-lang="feedbackTitleStart">Оставьте свои контактные данные</span>
        <span class="green-title" data-lang="feedbackTitleEnd">и наш отдел продаж свяжется с вами в ближайшее время</span>
      </h2>
      <div class="feedback__form">
        <ul class="feedback__list">
          <li class="feedback__item feedback__item--input">
            <input class="feedback__input" name="Поле ввода имени" placeholder="Имя" type="text" data-input="name" data-placeholderLanguage="name">
            <span class="feedback__span--required" data-lang="required">Необходимо заполнить это поле</span>
          </li>
          <li class="feedback__item feedback__item--input">
            <input class="feedback__input" name="Поле ввода телефона" placeholder="Номер телефона" type="tel" data-input="phone" data-placeholderLanguage="phoneNumber">
            <span class="feedback__span--required" data-lang="required">Необходимо заполнить это поле</span>
          </li>
          <li class="feedback__item feedback__item--button">
            <button class="feedback__button button button--fill" data-lang="contactUs">Связаться с нами</button>
          </li>
        </ul>
      </div>
    </div>
    <picture class="feedback__picture">
      <source srcset="" media="(min-width: 1280px)">
      <img class="feedback__img" src="" alt="A">
    </picture>
  </section>
  <!-- END feedback section-->
</main>
<!--END MAIN -->

<?php get_footer(); ?>