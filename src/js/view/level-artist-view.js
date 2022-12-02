import AbstractView from "../AbstractView";
import { getMistakesTemplate } from "../templates/screens/components-templates";
import TimerView from "./timer-view";

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getPlayerWrapperTemplate = (songSrc) => {
  return `<div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>`;
};

const getArtistAnswerTemplate = (index, imgSrc, imgWidth, imgHeight, title) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r js-main-answer" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
            <label class="main-answer" for="answer-${index}">
              <img class="main-answer-preview" src="${imgSrc}" alt="${title}" width="${imgWidth}" height="${imgHeight}">
              ${title}
            </label>
          </div>`;
};

const getScreenLevelArtistTemplate = (GameSettings, state, question) => {
  return (`<section class="main main--level main--level-artist js-main">
            ${new TimerView().template}
            ${getMistakesTemplate(GameSettings, state)}
            <div class="main-wrap">
              ${getTitleTemplate(question.question)}
              ${getPlayerWrapperTemplate(question.src)}
              <form class="main-list">

              ${question.answers.reduce((returnMsg, answers, i) => {
                return (returnMsg + getArtistAnswerTemplate(i + 1, answers.image.url, answers.image.width, answers.image.height, answers.title));
              }, ``)}
              </form>
            </div>
          </section>`)
}

export default class LevelArtistView extends AbstractView {
  constructor(GameSettings, state, question) {
    super();
    this.GameSettings = GameSettings;
    this.state = state;
    this.question = question;
  }

  get template() {
    return getScreenLevelArtistTemplate(this.GameSettings, this.state, this.question);
  };

  onClick() {
  };

  bind() {
    const levelArtistInputs = [...this.element.querySelectorAll(`.js-main-answer`)];
    levelArtistInputs.forEach(it => it.checked = false);
    levelArtistInputs.forEach(it => {
      it.addEventListener(`change`, this.onClick)
    });
  };
};