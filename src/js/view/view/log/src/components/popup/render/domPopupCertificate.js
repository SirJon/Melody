import { getNode } from "../../getNode/getNode";

export const domPopupCertificate = getNode(
  `<section class="popup popup--certificate">
    <div class="popup__content">
      <div class="popup__header">
        <button class="button popup__button--close" type="button">
          <span class="visually-hidden">Закрыть popup</span>
          <svg class="popup__svg--close">
            <use xlink:href=""></use>
          </svg>
        </button>
      </div>
      <div class="popup__scroll">
        <div class="popup__declaration">
        </div>
      </div>
    </div>
  </section>`
)