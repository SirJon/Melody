import "../styles/sass/style.scss"
import "./parts/header";
import "./parts/footer";
import "./utils/currentItems/currentItems";

import { svgRecord } from "./img/svgRecord";
import mapIconSvg from "../img/svg/mapIcon.svg"

svgRecord({
  selector: `.contacts__svg--phone`,
  id: `phone`,
});
svgRecord({
  selector: `.contacts__svg--mail`,
  id: `mail`,
});
svgRecord({
  selector: `.contacts__svg--map`,
  id: `map`,
});



/////////////////
ymaps.ready(function () {
  const desktopWidth = 1280;
  const COORDINATE = [50.660389, 38.672295];
  var map = new ymaps.Map('map', {
    center: COORDINATE,
    zoom: 17,
    controls: [],  //'typeSelector',  'fullscreenControl', 'geolocationControl', 'zoomControl'
  },
    {
      //Конпки как добраться и доехать на такси
      // suppressMapOpenBlock: true
    }
  );
  map.controls.remove('routeEditor');

  const hideYandexLogo = () => {
    const startClass = document.querySelector(`ymaps`).className.split(`-map`).shift();
    document.querySelector(`.${startClass}-copyright__layout`).style.display = `none`;
    document.querySelector(`.${startClass}-gototech`).style.opacity = `0`;
    document.querySelector(`.${startClass}-gototech`).style['pointer-events'] = "none";
  };

  hideYandexLogo();

  //Добавление метки
  const myPlacemarDesktop = new ymaps.Placemark(COORDINATE,
    {},
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: mapIconSvg,
      // Размеры метки.
      iconImageSize: [64, 74],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-32, -74],
    }
  );
  const myPlacemarMobile = new ymaps.Placemark(COORDINATE,
    {},
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: mapIconSvg,
      // Размеры метки.
      iconImageSize: [42, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-21, -50],
    }
  );
  window.innerWidth >= desktopWidth ? map.geoObjects.add(myPlacemarDesktop) : map.geoObjects.add(myPlacemarMobile);


  // Создадим пользовательский макет ползунка масштаба.
  const ZoomLayout = ymaps.templateLayoutFactory.createClass(
    `
    <div class='map__wrapper--buttons'>
      <button id='zoom-in' class='map__button map__button--plus button' type="button"></button>
      <button id='zoom-out' class='map__button map__button--minus button' type="button"></button>
    </div>
    `, {

    // Переопределяем методы макета, чтобы выполнять дополнительные действия
    // при построении и очистке макета.
    build: function () {
      // Вызываем родительский метод build.
      ZoomLayout.superclass.build.call(this);

      // Привязываем функции-обработчики к контексту и сохраняем ссылки
      // на них, чтобы потом отписаться от событий.
      this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
      this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

      // Начинаем слушать клики на кнопках макета.
      document.querySelector('#zoom-in').addEventListener('click', this.zoomInCallback);
      document.querySelector('#zoom-out').addEventListener('click', this.zoomOutCallback);
    },

    clear: function () {
      // Снимаем обработчики кликов.
      document.querySelector('#zoom-in').removeEventListener('click', this.zoomInCallback);
      document.querySelector('#zoom-out').removeEventListener('click', this.zoomOutCallback);

      // Вызываем родительский метод clear.
      ZoomLayout.superclass.clear.call(this);
    },

    zoomIn: function () {
      var map = this.getData().control.getMap();
      map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
    },

    zoomOut: function () {
      var map = this.getData().control.getMap();
      map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
    }
  }),
    zoomControl = new ymaps.control.ZoomControl({ options: { layout: ZoomLayout } });

  map.controls.add(zoomControl);
});