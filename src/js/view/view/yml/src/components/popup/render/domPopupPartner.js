import { getNode } from "../../utils/getNode/getNode";

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
            <span class="popup__span--required">Required</span>
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Address" type="text" data-input="address">
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Contact name" type="text" data-input="name">
            <span class="popup__span--required">Required</span>
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="Phone" type="tel" data-input="phone">
            <span class="popup__span--required">Required</span>
          </li>
          <li class="popup__item">
            <input class="popup__input" placeholder="E-mail" type="text" data-input="email">
            <span class="popup__span--required">Required</span>
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
                <span class="popup__span--required">Required</span>
              </span>
            </label>
          </li>
        </ul>
        <div class="popup__submit">
          <button class="button popup__button button--fill">submit</button>
        </div>
      </div>
    </div>
    <svg class="popup__wave" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff"
        d="M0,15L80,30C160,45,320,75,480,77.5C640,80,800,55,960,50C1120,45,1280,60,1440,77.5C1600,95,1760,115,1920,122.5C2080,130,2240,125,2400,125C2560,125,2720,130,2880,117.5C3040,105,3200,75,3360,52.5C3520,30,3680,15,3840,22.5C4000,30,4160,60,4320,62.5C4480,65,4640,40,4800,27.5C4960,15,5120,15,5280,35C5440,55,5600,95,5760,105C5920,115,6080,95,6240,80C6400,65,6560,55,6720,60C6880,65,7040,85,7200,100C7360,115,7520,125,7680,127.5C7840,130,8000,125,8160,110C8320,95,8480,70,8640,70C8800,70,8960,95,9120,92.5C9280,90,9440,60,9600,52.5C9760,45,9920,60,10080,60C10240,60,10400,45,10560,42.5C10720,40,10880,50,11040,52.5C11200,55,11360,50,11440,47.5L11520,45L11520,150L11440,150C11360,150,11200,150,11040,150C10880,150,10720,150,10560,150C10400,150,10240,150,10080,150C9920,150,9760,150,9600,150C9440,150,9280,150,9120,150C8960,150,8800,150,8640,150C8480,150,8320,150,8160,150C8000,150,7840,150,7680,150C7520,150,7360,150,7200,150C7040,150,6880,150,6720,150C6560,150,6400,150,6240,150C6080,150,5920,150,5760,150C5600,150,5440,150,5280,150C5120,150,4960,150,4800,150C4640,150,4480,150,4320,150C4160,150,4000,150,3840,150C3680,150,3520,150,3360,150C3200,150,3040,150,2880,150C2720,150,2560,150,2400,150C2240,150,2080,150,1920,150C1760,150,1600,150,1440,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z">
      </path>
    </svg>
  </div>
</section>`
)