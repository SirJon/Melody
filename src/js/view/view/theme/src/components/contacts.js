import "../assets/scss/style.scss";
import "../components/modulus/header";
import "../components/modulus/footer";
import "./utils/whiteTheme/whiteTheme";
import "./utils/homePage/homePage";
import icon from "../assets/img/svg/map.svg";
import { sendRequest } from "./utils/sendRequest/sendRequest";

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const contacts = data.dir + "/database/page/contacts/contacts.json";
    sendRequest('GET', contacts)
      .then(data => {

        const centerCoordinates = data.coordinates;
        const center = centerCoordinates.split(`,`).map(it => Number(it));
        
        ymaps.ready(function () {
          var myMap = new ymaps.Map('map', {
            center: center,
            zoom: 18,
            controls: ['zoomControl']
            //   , 'typeSelector',  'fullscreenControl', 'geolocationControl'
          }, {
            searchControlProvider: 'yandex#search'
          }),
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ), myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'г. Белгород, ул. Ворошилова 2а',
            }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: icon,
              // Размеры метки.
              iconImageSize: [110, 60],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-55, -60]
            })
        
          myMap.geoObjects
            .add(myPlacemark);
          myMap.behaviors.disable('scrollZoom');
          myMap.behaviors.disable('drag');
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });