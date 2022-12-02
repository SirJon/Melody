import AbstractView from "../AbstractView";
import { logoTemplate } from "../templates/screens/components-templates";

const startButtonTemplate = () => `<button class="main-play js-main-start">Начать игру</button>`;
const infoTemplate = () => `
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты — за 5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
</p>`.trim();
const screenWelcomeTemplate = () => `
<section class="main main--welcome js-main">
  ${logoTemplate}
  ${startButtonTemplate()}
  ${infoTemplate()}
</section>`.trim();

export default class WelcomView extends AbstractView {
  constructor() {
    super();
  };

  get template() {
    return screenWelcomeTemplate();
  };

  onClick(){
  };

  bind() {
    const playButton = this.element.querySelector(`.js-main-start`);
    playButton.addEventListener(`click`, this.onClick);
  };
};