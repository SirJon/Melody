import AbstractView from "../../../AbstractView";
export default class ResultFalse extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  };

  get template() {
    return `<section class="main main--result  js-main">
    <section class="logo js-logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>

    ${
      false 
      ? `<h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`
      :  `<h2 class="title">Какая жалость!</h2>
      <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`
    }
    <span role="button" tabindex="0" class="main-replay js-main-replay">Попробовать ещё раз</span>
  </section>`
  };

  onClick() {
  };

  bind() {
  };
};