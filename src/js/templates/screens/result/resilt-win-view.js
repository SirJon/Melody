import AbstractView from "../../../AbstractView";
import gamePlayerResult from "../../../data/game-player-result";
import { logoTemplate } from "../components-templates";

const getReplayTemplate = () => {
  return `<span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>`;
};

const getLogoTemplate = () => {
  return logoTemplate;
};

const getTitleTemplate = () => {
  return `<h2 class="title">Вы настоящий меломан!</h2>`;
};

const getPlayerResultTemplate =(players, currentPlayer) => {
  return `<span class="main-comparison">${gamePlayerResult(players, currentPlayer)}</span>`
}

const getGameResultTemplate = (time, points, fastPoints, mistakes) => {
  const SECOND = 60;
  const minuts = Math.floor(time/SECOND);
  const seconds = time - SECOND*minuts;
  return `<div class="main-stat">
            За ${minuts}
            ${
              minuts === 1
              ? `минуту`
              : minuts === 2 || minuts === 3 || minuts === 4
              ? `минуты`
              : `минут`
            } и ${seconds}
            ${
              seconds === 1
              ? `секунду`
              : seconds === 2 || seconds === 3 || seconds === 4
              ? `секунды`
              : `секунд`
            } 
            <br>вы набрали ${points}
            ${
              points === 1
              ? `балл`
              : points === 2 || points === 3 || points === 4
              ? `балла`
              : `баллов`
            } 
            (${fastPoints}
            ${
              fastPoints === 1
              ? `быстрый`
              : `быстрых`
            })
            <br>совершив ${mistakes}
            ${
              mistakes === 1
              ? `ошибку`
              : mistakes === 2 || mistakes === 3 || mistakes === 4
              ? `ошибки`
              : `ошибок`
            }
          </div>`
};

const getScreenResultWinTemplate = (players, currentPlayer) => {
  return `<section class="main main--result js-main">
            ${getLogoTemplate()}
            ${getTitleTemplate()}
            ${getGameResultTemplate(currentPlayer.remainingTime, currentPlayer.score, 0, currentPlayer.remainingNotes)}
            ${getPlayerResultTemplate(players, currentPlayer)}
            ${getReplayTemplate()}
          </section>`
};
export default class ResultWin extends AbstractView {
  constructor(players, currentPlayer) {
    super();
    this.players = players;
    this.currentPlayer = currentPlayer;
  };

  get template() {
    return getScreenResultWinTemplate(this.players, this.currentPlayer);
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