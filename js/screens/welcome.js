import { getNode } from "../utils";
import { screenLevelGenre } from "./level-genre"

export const screenWelcome = getNode(
  `<section class="main main--welcome js-main">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play js-main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`
);

const levelGenre = () => {
  showScreen(screenLevelGenre);

};

export const initScreenWelcome = () => {
  const playButton = document.querySelector(`.js-main-play`);
  playButton.addEventListener(`click`, levelGenre);
};

