import AbstractView from "../AbstractView";
import { logoTemplate } from "../templates/screens/components-templates";

const getReplayTemplate = () => {
  return `<span role="button" tabindex="0" class="main-replay js-main-replay">Попробовать ещё раз</span>`;
};

const getTimeOverTemplate = () => {
  return `<h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
};

const getAttemptsEndTemplate = () => {
  return `<h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
};

const getResultFalseTemplate = (state) => {
  return `<section class="main main--result  js-main">
            ${logoTemplate}

            ${state.time === 0
              ? getTimeOverTemplate()
              : getAttemptsEndTemplate()
            }
            ${getReplayTemplate()}
          </section>`
}
export default class ResultFalseView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  };

  get template() {
    return getResultFalseTemplate(this.state);
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