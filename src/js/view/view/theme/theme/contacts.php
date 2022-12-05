<?php
/*
* Template name: contacts
*/
?>
<?php get_header(); ?>


<!-- MAIN -->
<main class="main" data-page="contacts">
  <section class="contacts">
    <h3 class="contacts__title title--h3" data-lang="contactsMainTitleLang">Контакты</h3>
    <span class="contacts__span--title" data-lang="contactsNameCompanyLang">OOO «Технопрогресс»</span>
    <div class="contacts__info">
      <ul class="footer-burger__list">
        <li class="footer-burger__item">
          <a class="footer-burger__link" data-wp-content="address"
          href="https://yandex.ru/maps/-/CCUZbFcoDC" data-wp-link="wpLink">
            
          </a>
        </li>
        <li class="footer-burger__item">
          <a class="footer-burger__link" href="tel:+79040837766" data-wp-phone="tell"></a>
        </li>
        <li class="footer-burger__item">
          <a class="footer-burger__link" target="_blanck" rel="noopener noreferrer"
            href="" data-wp-email="email"></a>
        </li>
      </ul>
    </div>
    <div class="contacts__map" id="map"></div>
  </section>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=6f0873c0-54f7-46a8-a3bf-e6b969febe2e"
    type="text/javascript"></script>
</main>
<!-- END MAIN -->

  <?php
get_footer();