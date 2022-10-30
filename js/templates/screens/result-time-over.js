import { getNode, showScreen } from "../../utils";
import { screenWelcome, initScreenWelcome } from "./welcome";
import { screenLevelGenre, initScreenLevelGenre } from "./level-genre";

export const screenResulTimeOver = getNode(
  `<section class="main main--result  js-main">
    <section class="logo js-logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay js-main-replay">Попробовать ещё раз</span>
  </section>`
);

const levelMain = (e) => {
  e.preventDefault();
  showScreen(screenWelcome);
  initScreenWelcome();
};

const levelGenre = (e) => {
  e.preventDefault();
  showScreen(screenLevelGenre);
  initScreenLevelGenre();
};

export const initScreenResultTimeOver = () => {
  const mainReplay = document.querySelector(`.js-main-replay`);
  mainReplay.addEventListener(`click`, levelGenre);
  const logo = document.querySelector(`.js-logo`);
  logo.addEventListener(`click`, levelMain);
};