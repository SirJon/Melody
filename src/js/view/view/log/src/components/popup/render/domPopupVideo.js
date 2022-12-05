import { getNode } from "../../getNode/getNode";

export const domPopupVideo = getNode(
  `<section class="popup popup--video">
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
      <div class="popup__video">
        <iframe class="popup__iframe--youtube" type="text/html" loading="lazy"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0">
        </iframe>
        <span class="popup__span--loading">Loading, please wait...</span>
      </div>

    </div>
  </div>
</section>`
)