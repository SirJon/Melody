import { getNode } from "../../getNode/getNode";

export const domPopupPartner = getNode(
  `<section class="popup popup--partner">
  <div class="popup__content">
    <div class="popup__header">
      <h3 class="popup__title gradient--text">Interested <br> in becoming a partner?</h3>
      <button class="button popup__button--close" type="button">
        <span class="visually-hidden">Закрыть popup</span>
        <svg class="popup__svg--close">
          <use xlink:href=""></use>
        </svg>
      </button>
    </div>
    <div class="popup__scroll">
      <div class="popup__form">
        <ul class="popup__list">
          <li class="popup__item">
            <input class="popup__input" placeholder="Company name" type="text" data-input="company">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Address" type="text" data-input="address">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Contact name" type="text" data-input="name">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Phone" type="tel" data-input="phone">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="E-mail" type="text" data-input="email">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Message" type="text" data-input="text">
          </li>
          <li class="popup__item popup__item--checkbox">
            <input class="visually-hidden popup__input popup__input--checkbox" type="checkbox" id="partnerCheckBox" data-input="checkbox">
            <label class="popup__label popup__label--checkbox" for="partnerCheckBox">
              <svg class="popup__svg--checkbox">
                <use xlink:href=""></use>
              </svg>
              <span class="popup__span--checkbox">
                <span>I hereby consent to the processing of my personal data for the selected purposes specified in
                  the</span>
                <button class="button popup__link button--privacy-policy" type="button">Privacy Policy</button>
                <span>and the</span>
                <button class="button popup__link button--user-agreement" type="button">User Agreement</button>
              </span>
            </label>
          </li>
        </ul>
        <div class="popup__submit">
          <button class="button popup__button button--fill">submit</button>
        </div>        
      </div>
    </div>
  </div>
</section>`
)