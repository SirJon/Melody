import AbstractView from "../../../AbstractView";
export default class ResultWin extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  };

  get template() {
    return `<section class="main main--result js-main">
    <section class="logo js-logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За ${`*minuts*`} минуты и ${`*second*`} секунд
      <br>вы набрали ${`*result*`} баллов (${`*fast resilt*`} быстрых)
      <br>совершив ${`*mistakes*`} ошибки
    </div>
    <span class="main-comparison">Вы заняли ${`*result*`} место из ${`*all players*`}. Это лучше чем у ${`*%*`} игроков</span>
    <span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>
  </section>`
  };

  onClick() {
  };

  bind() {
  };
};