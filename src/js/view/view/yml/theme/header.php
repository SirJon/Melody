<?php ?>
<!DOCTYPE html>
<html class="page" lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php wp_head(); ?>

  <title>Alekseevskoe</title>
</head>

<body class="page__body">
  
  <!-- HEADER -->
  <header class="header">
    <nav class="main-nav main-nav--close">
      <div class="main-nav__logo">
        <a href="./index.html" class="main-nav__link main-nav__link--logo">
          <div class="wrapper--svg" data-elLanguage="ru">
            <svg class="main-nav__svg--logo main-nav__svg--logo-ru">
              <use xlink:href=""></use>
            </svg>
          </div>
          <div class="wrapper--svg" data-elLanguage="en">
            <svg class="main-nav__svg--logo main-nav__svg--logo-en">
              <use xlink:href=""></use>
            </svg>
          </div>
        </a>
      </div>
      <button class="main-nav__toggle button">
        <span class="visually-hidden">Открыть меню</span>
      </button>
      <ul class="main-nav__list main-nav__list--navigation menu--line">
        <li class="main-nav__item" data-page="index"><a href="./index.html" class="main-nav__link" data-lang="index">Главная</a></li>
        <li class="main-nav__item" data-page="catalog"><a href="./catalog.html" class="main-nav__link" data-lang="catalog">Каталог</a></li>
        <li class="main-nav__item" data-page="delivery"><a href="./delivery.html" class="main-nav__link" data-lang="deliveryPayment">Доставка и оплата</a></li>
        <li class="main-nav__item" data-page="contacts"><a href="./contacts.html" class="main-nav__link" data-lang="contacts">Контакты</a></li>
        <li class="main-nav__item main-nav__item--desktop"><button class="main-nav__button button button--border"
            type="button" data-lang="forPartner" data-elLanguage="en">Партнерам</button></li>
      </ul>
      <div class="main-nav__language language language--close menu--line">
        <button class="button language__button" type="button">
          <span class="language__span--select" data-lang="select">RU</span>
          <svg class="language__svg--select">
            <use xlink:href=""></use>
          </svg>
        </button>
        <span class="language__span--title" data-lang="language">Язык</span>
        <ul class="main-nav__list language__list">
          <li class="language__item">
            <input class="visually-hidden language__radio" type="radio" name="radio" id="language__radio-RU" data-inputLanguage="ru" checked>
            <label class="language__label" for="language__radio-RU" tabindex="0">
              <span class="language__span">RU</span>
              <div class="language__line"></div>
              <span class="language__span--description">Русский</span>
            </label>
          </li>
          <li class="language__item language__item--line"></li>
          <li class="language__item">
            <input class="visually-hidden language__radio" type="radio" name="radio" id="language__radio-EN" data-inputLanguage="en">
            <label class="language__label" for="language__radio-EN" tabindex="0">
              <span class="language__span">EN</span>
              <div class="language__line"></div>
              <span class="language__span--description">English</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="main-nav__partner partner">
        <button class="partner__button button button--fill" data-lang="becomePartner">Стать партнером</button>
        <ul class="main-nav__list partner__list">
          <li class="partner__item">
            <a class="main-nav__link" href="tel:+74723430566">+7(47234) 3-05-66</a>
          </li>
          <li class="partner__item partner__item--desktop">
            <a class="main-nav__link" href="tel:+79524308830">+7 (952) 430-88-30</a>
          </li>
          <li class="partner__item partner__item--desktop">
            <a class="main-nav__link" target="_blanck" rel="noopener noreferrer"
              href="mailto:afbelnpo@gmail.com">afbelnpo@gmail.com</a>
          </li>
          <li class="partner__item partner__item--desktop">
            <a class="main-nav__link" href="https://yandex.ru/maps/-/CCUZUDxb-A">
              <span data-lang="addressStart">309856, Белгородская обл.,</span><br>
              <span data-lang="addressEnd">г. Алексеевка, тер. Опытная станция</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-nav__social social">
        <a href="" class="main-nav__link social__link">Ok</a>
        <a href="https://vk.com/npoalex" class="main-nav__link social__link">Vk</a>
      </div>
    </nav>
  </header>
  <!-- END HEADER -->