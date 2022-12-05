export const HTMLpopupBuy = 
`<section class="popup popup--buy">
<div class="popup__conteiner">
  <div class="popup__content">
    <div class="popup__header">
      <h3 class="popup__h3" data-lang="popupOrderLang">Заказать</h3>
      <button class="button popup__button--close button--popupClose" type="button">
        <span class="visually-hidden">Закрыть popup</span>
        <svg class="popup__svg--close">
          <use xlink:href=""></use>
        </svg>
      </button>
    </div>
    <div class="popup__scroll">
      <div class="credit-popup__info">
        <div class="credit-popup__img-wrapper">
          <img class="credit-popup__img" src="" alt="Установка">
        </div>
        <p class="credit-popup__paragraph">
          <span class="credit-popup__span credit-popup__span--title" data-mashine-content="name">R-1300</span>
          <span class="credit-popup__span credit-popup__span--equipment">
            <span class="form__span--label" data-lang="productBlockMidEquipmentTitleLang">
              Опция: комплект влажного нанесения
            </span>
          </span>
          <span class="credit-popup__span credit-popup__span--info"> 
            <span class="form__span " data-mashine-content="name">R-1300</span>
            <span class="" data-lang="productBlockHightEquipmentValueLang">| Пульт | Шланг | Насос | Сопло | Скребок</span>
          </span>
        </p>
      </div>
      <div class="popup__form">
        <ul class="popup__list">
          <li class="popup__item">
            <label class="popup__label popup__label--required" data-lang="popupNameLang" for="popupBuyName">Имя</label>
            <input class="popup__input" id="popupBuyName" placeholder="Александр" data-input="name"
              data-placeholder="superName" required>
          </li>
          <li class="popup__item">
            <label class="popup__label popup__label--required" data-lang="popupPhoneLang" for="popupBuyPhone">Номер
              телефона</label>
            <input class="popup__input" id="popupBuyPhone" placeholder="+7 999 000 00 00" data-input="phone" required>
          </li>
          <li class="popup__item">
            <label class="popup__label" for="popupBuyEmail">E-mail</label>
            <input class="popup__input" id="popupBuyEmail" placeholder="pochta@mail.ru" data-input="email">
          </li>
          <li class="popup__item popup__item--checkbox">
            <input class="visually-hidden popup__input popup__input--checkbox" type="checkbox" id="popupBuyCheckBox"
              data-input="checkbox" required>
            <label class="popup__label popup__label--checkbox" for="popupBuyCheckBox">
              <svg class="popup__svg--checkbox">
                <use xlink:href=""></use>
              </svg>
              <span class="popup__span--checkbox">
                <span data-lang="popupCheckBoxLang">Даю согласие на обработку персональных данных согласно</span>
                <button class="button popup__link button--privacy-policy" data-lang="popupCheckBoxPrivacyPolicyLang"
                  type="button">политике конфидециальности</button>
                <span data-lang="popupCheckBoxEndLang">и</span>
                <button class="button popup__link button--user-agreement" data-lang="popupCheckBoxUserAgreementLang"
                  type="button">пользовательскому соглашению</button>
              </span>
            </label>
          </li>
        </ul>
        <button class="button popup__button button--add button-green--hover-focus" data-lang="popupOrderLang">Заказать</button>
      </div>
    </div>
  </div>
</div>
</section>`;