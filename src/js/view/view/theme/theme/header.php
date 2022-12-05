<?php ?>
<!DOCTYPE html>
<html class="page" lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php wp_head(); ?>

  <title>Technoprogress</title>
</head>
<body class="page__body">

  <!-- HEADER -->
  <header class="header">
    <nav class="main-nav main-nav--close">
      <a href="./index.html" class="main-nav__link--logo">
        <svg class="main-nav__svg--logo js-main-nav__svg--logo">
          <use xlink:href=""></use>
        </svg>
        <span class="main-nav__span--logo">INSULATION <br>
          BLOWING<br>
          MACHINE</span>
      </a>
      <form class="main-nav__form">
        <fieldset class="main-nav__fieldset">
          <ul class="main-nav__list main-nav__list--product-change">
            <li class="main-nav__item--product-change">
              <input class="visually-hidden main-nav__radio" type="radio" name="aviailability--product-change" id="R-1300-header" checked>
              <label class="main-nav__label" for="R-1300-header" tabindex="0">              
                <span class="main-nav__span--product-change">R-1300</span>
              </label>
            </li>
            <li class="main-nav__item--product-change">
              <input class="visually-hidden main-nav__radio" type="radio" name="aviailability--product-change" id="R-800-header">
              <label class="main-nav__label" for="R-800-header" tabindex="0">
                <span class="main-nav__span--product-change">R-800</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
      <div class="main-nav__wrapper--toggle">
        <button class="main-nav__toggle">
          <span class="visually-hidden">Открыть меню</span>
        </button>
      </div>
      <ul class="main-nav__list main-nav__list--navigation navigation">
        <li class="navigation__item navigation__item--desktop-show" data-page="index">
          <a href="./index.html" class="navigation__link" data-lang="IndexLang">Главная</a>
        </li>
        <li class="navigation__item" data-page="delivery"><a href="./delivery.html" class="navigation__link" data-lang="DeliveryLang">Доставка и оплата</a></li>
        <li class="navigation__item" data-page="galary"><a href="./galary.html" class="navigation__link" data-lang="GalaryLang">Галерея</a></li>
        <li class="navigation__item" data-page="contacts"><a href="./contacts.html" class="navigation__link" data-lang="headerContactsLang">Контакты</a></li>
      </ul>
      <form class="main-nav__language">
        <fieldset class="main-nav__fieldset language language--close">
          <button class="button language__button--select" type="button">
            <span class="language__span--select" data-lang="headerSelectorLang">RU</span>
            <svg class="language__svg--select js-language__svg--select">
              <use xlink:href=""></use>
            </svg>              
          </button>
          <span class="language__span--title" data-lang="headerLanguageLang">Язык</span>
          <ul class="main-nav__list language__list">
            <li class="language__item">
              <input class="visually-hidden language__radio" type="radio" name="radio" id="language__radio-RU" checked>
              <label class="language__label" for="language__radio-RU" tabindex="0">
                <span class="language__span">RU</span>
                <span class="language__span--description">Русский</span>
              </label>
            </li>
            <li class="language__item">
              <input class="visually-hidden language__radio" type="radio" name="radio" id="language__radio-EN">
              <label class="language__label" for="language__radio-EN" tabindex="0">
                <span class="language__span">EN</span>
                <span class="language__span--description">English</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
      <div class="main-nav__footer footer-burger">
        <button class="button footer-burger__button footer-burger--desktop-none button-transparent--hover-focus button--partner" data-lang="headerButtonPartnerLang">Стать партнером</button>
        <ul class="main-nav__list footer-burger__list">
          <li class="footer-burger__item footer-burger--desktop-none">
            <a class="footer-burger__link" href="https://yandex.ru/maps/-/CCUZbFcoDC" data-wp-content="address" data-wp-link="wpLink">
              
            </a>
          </li>
          <li class="footer-burger__item">
            <a class="footer-burger__link" href="tel:+79040837766" data-wp-phone="tell">+* (***) **-**-**</a>
          </li>
          <li class="footer-burger__item footer-burger--desktop-none">
            <a class="footer-burger__link" target="_blanck" rel="noopener noreferrer" href="" data-wp-email="email"></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- END HEADER -->