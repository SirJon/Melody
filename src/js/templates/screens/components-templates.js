export const logoTemplate = `<section class="logo js-logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;

export const replayButtonTemplate = `<span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>`;

export const getMistakesTemplate = (GameSettings, state) => {
  return `<div class="main-mistakes">
            ${new Array(GameSettings.MAX_COUNT_MISTAKES - state.mistakes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
          </div>`;
};