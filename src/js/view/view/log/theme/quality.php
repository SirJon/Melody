<?php
/*
* Template name: quality
*/
?>
<?php get_header(); ?>

<!-- MAIN -->
<main class="page__main" data-page="quality">
  <section class="quality">
    <h2 class="quality__title title--h2 gradient--text">Quality & sertification</h2>
    <div class="quality__content">
      <div class="quality__wrapper--img">
        <img class="quality__img" src="" alt="cake">
      </div>
      <article class="quality__why-us">
        <h3 class="quality__subtitle quality__subtitle--why-us">
          <span class="quality__span--title">Why</span>
          <span class="quality__span--title quality__span--end-why-us">us?</span>
        </h3>
        <ul class="quality__list">
          <li class="quality__item">
            <svg class="quality__svg quality__svg--ingredients">
              <use xlink:href=""></use>
            </svg>
            <span class="quality__span text--description">Only the best ingredients are used in the making of our
              products: cream cheese, cream, sour cream, Italian and Belgian chocolate, coconut butter, organic
              strawberry and mango puree, nuts, butter-based caramel of our own making</span>
          </li>
          <li class="quality__item">
            <svg class="quality__svg quality__svg--palm">
              <use xlink:href=""></use>
            </svg>
            <span class="quality__span text--description">We don’t use vegetable fat in our fillings. Only our own
              unique recipes and carefully selected combinations of ingredients and flavors.</span>
          </li>
          <li class="quality__item">
            <svg class="quality__svg quality__svg--sugar">
              <use xlink:href=""></use>
            </svg>
            <span class="quality__span text--description">We use low-sugar products</span>
          </li>
          <li class="quality__item">
            <svg class="quality__svg quality__svg--process">
              <use xlink:href=""></use>
            </svg>
            <span class="quality__span text--description">Due to a properly organized technological process, selected
              equipment and ingredients, we have obtained a unique, delicate and satin-like texture of our cheesecakes
              that melt in your mouth.</span>
          </li>
          <li class="quality__item">
            <svg class="quality__svg quality__svg--cheese">
              <use xlink:href=""></use>
            </svg>
            <span class="quality__span text--description">Cream cheese used in our cheesecakes is produced in our region
              and has rich and unique flavor</span>
          </li>
        </ul>
      </article>
      <article class="quality__sertification">
        <h3 class="quality__subtitle quality__subtitle--sertification">
          <span class="quality__span--title quality__span--start-sertification">serti</span>
          <span class="quality__span--title">fication</span>
        </h3>
        <p class="quality__paragraph text--description">
          <span class="quality__span--description">Only high-quality raw materials that meet the standards and
            certification requirements are used in our production process. The company has implemented and successfully
            maintains the HACCP food safety management system.</span>
          <span class="quality__span--description">All manufactured products have the necessary declarations</span>
        </p>
        <div class="quality__wrapper--declaration">
        </div>

      </article>
    </div>

    <!-- video start-->
    <section class="quality__video video">
      <img class="video__video" src="" alt="" data-video="">
      <button class="video__button button" type="button">
        <span class="visually-hidden">Watch video</span>
        <svg class="video__svg">
          <use xlink:href=""></use>
        </svg>
      </button>
      <div class="video__description">
        <span class="video__span">Production <br class="br--table-hide"> process</span>
        <div class="video__line"></div>
      </div>
    </section>
    <!-- video end-->

    <!-- partnership start-->
    <section class="quality__partnership partnership">
      <h2 class="partnership__title gradient--text">Interested in becoming a partner?</h2>
      <button class="partnership__button button button--fill" type="submit">Partnership</button>
      <svg class="partnership__svg--cake">
        <use xlink:href=""></use>
      </svg>
      <svg class="partnership__svg--nut">
        <use xlink:href=""></use>
      </svg>
    </section>
    <!-- partnership end-->
  </section>
</main>
<!--END MAIN -->

<?php get_footer(); ?>