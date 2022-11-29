import AbstractView from "../../../AbstractView";
import { logoTemplate } from "../components-templates";
const getLogoTemplate = () => {
  return logoTemplate;
};

const getTitleTemplate = () => {
  return `<h2 class="title">Вы настоящий меломан!</h2>`;
}

const getScreenResultWinTemplate = () => {
  return `<section class="main main--result js-main">

            ${getLogoTemplate()}
            ${getTitleTemplate()}

            <div class="main-stat">
              За ${`*minuts*`} минуты и ${`*second*`} секунд
              <br>вы набрали ${`*result*`} баллов (${`*fast resilt*`} быстрых)
              <br>совершив ${`*mistakes*`} ошибки
            </div>
            <span class="main-comparison">Вы заняли ${`*result*`} место из ${`*all players*`}. Это лучше чем у ${`*%*`} игроков</span>
            <span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>
          </section>`
};
export default class ResultWin extends AbstractView {
  constructor() {
    super();
  };

  get template() {
    return getScreenResultWinTemplate();
  };

  onClick() {
  };

  onLogo () {
  };

  bind() {
    const mainReplay = this.element.querySelector(`.js-main-replay`);
    mainReplay.addEventListener(`click`, this.onClick);
    const logo = this.element.querySelector(`.js-logo`);
    logo.addEventListener(`click`, this.onLogo);
  };
};