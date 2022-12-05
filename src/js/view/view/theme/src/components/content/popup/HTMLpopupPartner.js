export const HTMLpopupPartner = 
`<section class="popup popup--partner">
<div class="popup__conteiner">
  <div class="popup__content">
    <div class="popup__header">
      <h3 class="popup__h3" data-lang="popupPartnerTitleLang">Хотите стать нашим партнером?</h3>
      <button class="button popup__button--close button--popupClose" type="button">
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
            <label class="popup__label popup__label--required" data-lang="popupCompanyLang" for="popupPartnerCompany">Название
              компании</label>
            <input class="popup__input" id="popupPartnerCompany" placeholder="Компания" data-input="company"
              data-placeholder="company" required>
          </li>
          <li class="popup__item">
            <label class="popup__label popup__label--required" data-lang="popupAddressLang"
              for="popupPartnerAddress">Адрес</label>
            <input class="popup__input" id="popupPartnerAddress" placeholder="123456, РФ, г. Москва, ул. Лесная, д. 5"
              data-input="address" data-placeholder="address" required>
          </li>
          <li class="popup__item">
            <label class="popup__label popup__label--required" data-lang="popupFaceLang" for="popupPartnerName">Контактное
              лицо</label>
            <input class="popup__input" id="popupPartnerName" placeholder="Александр" data-input="name"
              data-placeholder="superName" required>
          </li>
          <li class="popup__item">
            <label class="popup__label popup__label--required" data-lang="popupPhoneLang" for="popupPartnerPhone">Номер
              телефона</label>
            <input class="popup__input" id="popupPartnerPhone" placeholder="+7 999 000 00 00" data-input="phone"
              required>
          </li>
          <li class="popup__item">
            <label class="popup__label" for="popupPartnerEmail">E-mail</label>
            <input class="popup__input" id="popupPartnerEmail" placeholder="pochta@mail.ru" data-input="email">
          </li>
          <li class="popup__item popup__item--checkbox">
            <input class="visually-hidden popup__input popup__input--checkbox" type="checkbox"
              id="popupPartnerCheckBox" data-input="checkbox" required>
            <label class="popup__label popup__label--checkbox" for="popupPartnerCheckBox">
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
        <button class="button popup__button button--add button-green--hover-focus" data-lang="popupPartnerButtonLang">Стать
          партнером</button>
      </div>
    </div>
  </div>
</div>
</section>`;