import "../assets/scss/style.scss";
import "../components/modulus/header";
import "../components/modulus/footer";
import "./utils/whiteTheme/whiteTheme";
import "./utils/homePage/homePage";
import { svgRecord } from "./fileRecord/svgRecord";
import { sendRequest } from "./utils/sendRequest/sendRequest";

const dirURL = '/dir.json';

sendRequest('GET', dirURL)
  .then(data => {
    const delivery = data.dir + "/database/page/delivery/delivery.json";
    sendRequest('GET', delivery)
      .then(data => {

        const R1300 = "R1300";
        const R800 = "R800";
        const OPTION = "options";
        const MILIMETERS = 1000;
        const fraim = document.querySelector(`.delivery-pay__iframe`);
        const volume = (product) => {
          return (Number(product.length) / MILIMETERS) * (Number(product.width) / MILIMETERS) * (Number(product.height) / MILIMETERS)
        };
        const maxclearance = (product) => {
          return Math.max(Number(product.length) / MILIMETERS, Number(product.width) / MILIMETERS, Number(product.height) / MILIMETERS)
        }
        const changeIframe = (product) => {
          fraim.src = `https://calc.pecom.ru/iframe/calculator/?address-from=Россия, Белгород&intake=1&address-to=Россия, Москва&delivery=1&weight=${Number(data[product].mass)}&volume=${volume(data[product])}&maxDimension=${maxclearance(data[product])}&declared-amount=${Number(data[product].cost)}&packing-rigid=1&transportation-type=auto`;
        };
        setTimeout(() => {
          changeIframe(R1300);
        }, 500);
        const fatherInputs = document.querySelector(`.delivery-pay__list`);

        fatherInputs.addEventListener(`click`, (evt) => {
          switch (evt.target.id) {
            case `delivery-pay__radio-1`:
              changeIframe(R1300);
              break;
            case `delivery-pay__radio-2`:
              changeIframe(R800);
              break;
            case `delivery-pay__radio-3`:
              changeIframe(OPTION);
              break;
          }
        });

      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });



svgRecord({
  selector: `.delivery-pay__svg--radio`,
  id: `radioChecked`,
});
svgRecord({
  selector: `.delivery-pay__svg--pack`,
  id: `pack`,
});