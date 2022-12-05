import { getNode } from "../../getNode/getNode";

export const domCardProduct = getNode(
  `<section class="card-product card-product--hide">
  <div class="card-product__content">
    <button class="card-product__button--close button">
      <span class="visually-hidden">close popup</span>
      <svg class="card-product__svg--close">
        <use xlink:href=""></use>
      </svg>
    </button>
    <div class="card-product__slider">
      <!-- Slider main container -->
      <div class="swiper card-product__swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper card-product__swiper-wrapper">
        </div>
      </div>
      <div class="card-product__wrapper--thumbs">
        <!-- Slider thumbs -->
        <div class="swiper card-product__swiper--thumbs">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
          </div>
        </div>
        <button class="card-product__button-swiper card-product__button-swiper--left button" type="button">
          <svg class="card-product__svg--button">
            <use xlink:href="./img/svg/sprite.svg#arrowPopup"></use>
          </svg>
        </button>
        <button class="card-product__button-swiper card-product__button-swiper--right button" type="button">
          <svg class="card-product__svg--button">
            <use xlink:href="./img/svg/sprite.svg#arrowPopup"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="card-product__description">
      <h3 class="card-product__title">Cheesecoke</h3>
      <span class="card-product__span--name">“Coconut”</span>
      <span class="card-product__span--description text-description">
        Want to try a truly heavenly dessert?
        Try our Coconut Cheesecake - based on curd cheese and coconut milk with the addition of natural coconut
        paste,
        decorated with white chocolate ganache.
        The dessert has a delicate texture and a pleasant aroma of coconut, and its taste will take you to paradise
        islands!
      </span>
      <div class="card-product__form">
        <ul class="card-product__list card-product__list--radio">
          <li class="card-product__item">
            <input class="visually-hidden card-product__radio" type="radio" name="kg" id="card-product__radio-max"
              checked>
            <label class="card-product__label" for="card-product__radio-max" tabindex="0">
              <span class="card-product__span--value">1,5</span>
              <span class="card-product__span--kg">kg</span>
            </label>
          </li>
          <li class="card-product__item">
            <input class="visually-hidden card-product__radio" type="radio" name="kg" id="card-product__radio-mid">
            <label class="card-product__label" for="card-product__radio-mid" tabindex="0">
              <span class="card-product__span--value">1</span>
              <span class="card-product__span--kg">kg</span>
            </label>
          </li>
          <li class="card-product__item">
            <input class="visually-hidden card-product__radio" type="radio" name="kg" id="card-product__radio-min">
            <label class="card-product__label" for="card-product__radio-min" tabindex="0">
              <span class="card-product__span--value">0,84</span>
              <span class="card-product__span--kg">kg</span>
            </label>
          </li>
        </ul>
        <ul class="card-product__list card-product__list--description">
          <li class="card-product__item--description card-product__options">
            <svg class="card-product__svg--description card-product__svg--scales">
              <use xlink:href=""></use>
            </svg>
            <p class="card-product__paragraph">
              <span class="card-product__span--measure">Weight</span>
              <span class="card-product__span--meaning card-product__span--weight">0,125kg х 12 pices</span>
            </p>
          </li>
          <li class="card-product__item--description card-product__options">
            <svg class="card-product__svg--description card-product__svg--package">
              <use xlink:href=""></use>
            </svg>
            <p class="card-product__paragraph">
              <span class="card-product__span--measure card-product__span--packaging">Packaging</span>
              <span class="card-product__span--meaning card-product__span--packet">Individual box</span>
            </p>
          </li>
          <li class="card-product__item--description card-product__options">
            <svg class="card-product__svg--description card-product__svg--box">
              <use xlink:href=""></use>
            </svg>
            <p class="card-product__paragraph">
              <span class="card-product__span--measure">Number of packages in a box</span>
              <span class="card-product__span--meaning card-product__span--pices">4 packages</span>
            </p>
          </li>
        </ul>
        <button class="card-product__button--order button button--fill" type="button">Partnership</button>
      </div>
    </div>

    <div class="card-product__characteristics characteristics characteristics--open">
      <div class="characteristics__toggle">
        <span class="characteristics__span--button">Additional features</span>
        <button class="characteristics__button button" type="button">
          <svg class="characteristics__svg--button">
            <use xlink:href=""></use>
          </svg>
        </button>
      </div>
      <div class="characteristic__block">
        <div class="characteristics__characteristic">
          <div class="characteristic__wrapper--title card-product__options">
            <svg class="characteristic__svg characteristic__svg--storage">
              <use xlink:href=""></use>
            </svg>
            <h3 class="characteristic__title">Storage</h3>
          </div>
          <div class="characteristic__line"></div>
          <div class="characteristic__description">
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--temperature">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Storage conditions</span>
                <span class="card-product__span--meaning characteristics__span--meaning">humidity levels 70-75% | t= 2 -
                  6°C</span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--expirationDate">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Shelf life</span>
                <span class="card-product__span--meaning characteristics__span--meaning">5 days</span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--avoid">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Avoid the following</span>
                <span class="card-product__span--meaning characteristics__span--meaning">Don't refreeze the product after it's been defrosted</span>
              </p>
            </div>
          </div>
        </div>
        <div class="characteristics__characteristic">
          <div class="characteristic__wrapper--title card-product__options">
            <svg class="characteristic__svg characteristic__svg--cold">
              <use xlink:href=""></use>
            </svg>
            <h3 class="characteristic__title">Freezing</h3>
          </div>
          <div class="characteristic__line"></div>
          <div class="characteristic__description">
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--blastChilling">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Blast chilling</span>
                <span class="card-product__span--meaning characteristics__span--meaning">90 minutes | t= -36°C</span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--temperatureСold">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Freezing temperature</span>
                <span class="card-product__span--meaning characteristics__span--meaning">t= -18°C</span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--expirationDateCold">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Shelf life</span>
                <span class="card-product__span--meaning characteristics__span--meaning">12 months from the production
                  date</span>
              </p>
            </div>
          </div>
        </div>
        <div class="characteristics__characteristic">
          <div class="characteristic__wrapper--title card-product__options">
            <svg class="characteristic__svg characteristic__svg--heat">
              <use xlink:href=""></use>
            </svg>
            <h3 class="characteristic__title">Defrosting</h3>
          </div>
          <div class="characteristic__line"></div>
          <div class="characteristic__description">
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--defrostingProcess">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Defrosting process</span>
                <span class="card-product__span--meaning characteristics__span--meaning">1,5 - 2 hours | t=0-6°C </span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--temperatureHeat">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Storage conditions</span>
                <span class="card-product__span--meaning characteristics__span--meaning">humidity levels < 75% |
                    t=4±2°C</span>
              </p>
            </div>
            <div class="card-product__options">
              <svg class="characteristic__svg characteristic__svg--expirationDateHeat">
                <use xlink:href=""></use>
              </svg>
              <p class="card-product__paragraph characteristics__paragraph">
                <span class="card-product__span--measure characteristics__span--measure">Shelf life</span>
                <span class="card-product__span--meaning characteristics__span--meaning">5 days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>`
);