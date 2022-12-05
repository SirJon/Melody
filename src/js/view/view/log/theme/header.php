<?php ?>
<!DOCTYPE html>
<html class="page" lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php wp_head(); ?>

  <title>Dessert-story</title>
</head>

<body class="page__body">

  <!-- HEADER -->
  <header class="header">
    <nav class="main-nav main-nav--close">
      <div class="main-nav__logo">
        <a href="./index.html" class="main-nav__link--logo">
          <svg class="main-nav__svg--logo">
            <use xlink:href="."></use>
          </svg>
        </a>
      </div>
      <button class="main-nav__toggle button">
        <span class="visually-hidden">Открыть меню</span>
      </button>
      <ul class="main-nav__list main-nav__list--navigation menu--line">
        <li class="main-nav__item" data-page="index"><a href="./index.html" class="main-nav__link">home</a></li>
        <li class="main-nav__item" data-page="catalog"><a href="./catalog.html" class="main-nav__link">catalogue</a></li>
        <li class="main-nav__item" data-page="quality"><a href="./quality.html" class="main-nav__link">quality & sertification</a></li>
        <li class="main-nav__item" data-page="delivery"><a href="./delivery.html" class="main-nav__link">delivery</a></li>
        <li class="main-nav__item" data-page="contacts"><a href="./contacts.html" class="main-nav__link">contacts</a></li>
      </ul>
      <div class="main-nav__language main-nav__language--close language menu--line">
        <button class="button language__button" type="button">
          <span class="main-nav__span--select language__span--select">EN</span>
          <svg class="main-nav__svg--language language__svg--select">
            <use xlink:href=""></use>
          </svg>
        </button>
        <span class="language__span--title">Language</span>
        <ul class="main-nav__list language__list">
          <li class="language__item">
            <div class="language__language language__language--activ">
              <div class="language__wrapper--span">
                <span class="language__span">EN</span>
              </div>
              <div class="language__line"></div>
              <span class="language__span--description">English</span>
            </div>
          </li>
          <li class="language__item--line"></li>
          <li class="language__item">
            <a class="language__language link" href="https://dessert-story.ru/">
              <div class="language__wrapper--span">
                <span class="language__span">RU</span>
              </div>
              <div class="language__line"></div>
              <span class="language__span--description">Русский</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-nav__partner partner">
        <button class="partner__button button button--border">Partnership</button>
        <ul class="main-nav__list partner__list">
          <li class="partner__item partner__item--desktop">
            <a class="main-nav__link" href="tel:+74722202521" data-wpphone="tell">+7 (4722) 20-25-21</a>
          </li>
          <li class="partner__item">
            <a class="main-nav__link" href="tel:+79038879933" data-wpphone="cell">+7 (903) 887-99-33</a>
          </li>
          <li class="partner__item partner__item--desktop">
            <a class="main-nav__link" href="https://yandex.ru/maps/-/CCUVI2VK3A" data-wplink="addressLink">
              <span data-wpcontent="addressStart">1/15 Berezovaya Street, Severny,</span> <br>
              <span data-wpcontent="addressEnd">Belgorod Region, Russia, 308519</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- END HEADER -->