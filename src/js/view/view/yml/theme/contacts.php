<?php
/*
* Template name: contacts
*/
?>
<?php get_header(); ?>

<!-- MAIN -->
<main class="page__main" data-page="contacts">
  <!-- contacts section-->
  <section class="contacts">
    <h2 class="contacts__title title--page" data-lang="contacts">Контакты</h2>
    <article class="contacts__data">
      <h3 class="contacts__subtitle" data-lang="npo">ООО НПО «Алексеевское»</h3>
      <ul class="contacts__list contacts__list--block">
        <li class="contacts__item">
          <svg class="contacts__svg contacts__svg--phone">
            <use xlink:href=""></use>
          </svg>
          <ul class="contacts__list contacts__list--content">
            <li class="contacts__item contacts__item--content">+7(47234) 3-05-66</li>
            <li class="contacts__item contacts__item--content">+7 (952) 430-88-30</li>
          </ul>
        </li>
        <li class="contacts__item">
          <svg class="contacts__svg contacts__svg--mail">
            <use xlink:href=""></use>
          </svg>
          <ul class="contacts__list contacts__list--content">
            <li class="contacts__item">afbelnpo@gmail.com</li>
          </ul>
        </li>
        <li class="contacts__item">
          <svg class="contacts__svg contacts__svg--map">
            <use xlink:href=""></use>
          </svg>
          <ul class="contacts__list contacts__list--content">
            <li class="contacts__item" data-lang="address">309856, Белгородская обл., г. Алексеевка, тер. Опытная станция</li>
          </ul>
        </li>
      </ul>
      <div class="contacts__social social">
        <a href="" class="social__link">Ok</a>
        <a href="https://vk.com/npoalex" class="social__link">Vk</a>
      </div>
    </article>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=ab35e848-0e3d-4013-9140-24151f8f658e"
      type="text/javascript"></script>
    <div class="contacts__wrapper--map">
      <div class="contacts__map" id="map"></div>
    </div>
  </section>
  <!-- END contacts section-->
</main>
<!--END MAIN -->

<?php get_footer(); ?>