<?php
/*
* Template name: contacts
*/
?>
<?php get_header(); ?>

<!-- MAIN -->
<main class="page__main" data-page="contacts">
  <section class="contacts">
    <h2 class="contacts__title title--h2 gradient--text">Contacts</h2>
    <article class="contacts__contacts">
      <h3 class="contacts__subtitle">DESERTNYE ISTORII PLYUS LLC</h3>
      <div class="contacts__info">
        <ul class="contacts__list contacts__list--info">
          <li class="contacts__item">
            <span class="contacts__span--title">Tel</span>
            <a class="contacts__link--content" href="tel:+7 (4722) 20-25-21" data-wpphone="tell">+7 (4722) 20-25-21</a>
          </li>
          <li class="contacts__item contacts__item--line"></li>
          <li class="contacts__item">
            <span class="contacts__span--title">Cell</span>
            <a class="contacts__link--content" href="tel:+7 (903) 887-99-33" data-wpphone="cell">+7 (903) 887-99-33</a>
          </li>
        </ul>
      </div>
      <div class="contacts__info">
        <ul class="contacts__list contacts__list--info">
          <li class="contacts__item">
            <span class="contacts__span--title">address</span>
            <a class="contacts__link--content" href="https://yandex.ru/maps/-/CCUVI2VK3A" data-wplink="addressLink">
              <span data-wpcontent="addressStart">1/15 Berezovaya Street, Severny,</span>
              <span data-wpcontent="addressEnd">Belgorod Region, Russia, 308519</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <div class="contacts__wrapper--map">
      <div class="contacts__map" id="map" data-wpcoordinates=""></div>
    </div>
    <div class="contacts__company-details">
      <ul class="contacts__list contacts__list--company-details">
        <li class="contacts__item--company-details">
          <span class="contacts__span--title">Taxpayer Identification Number/Tax Registration Reason Code</span>
          <span class="contacts__span--details" data-wpcontent="tin">3123418562/312301001</span>
        </li>
        <li class="contacts__item--company-details">
          <span class="contacts__span--title">Primary State Registration Number</span>
          <span class="contacts__span--details" data-wpcontent="psrn">1173123027285</span>
        </li>
        <li class="contacts__item--company-details">
          <span class="contacts__span--title">Registered address</span>
          <span class="contacts__span--details" data-wpcontent="addressRegister">Office 43, 21 Studencheskaya Street, Belgorod, Belgorod Region, Russia, 308023</span>
        </li>
      </ul>
    </div>
  </section>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=85fd9a3f-5a50-43c5-92d0-30cef395cf58"
    type="text/javascript"></script>
</main>
<!--END MAIN -->

<?php get_footer(); ?>