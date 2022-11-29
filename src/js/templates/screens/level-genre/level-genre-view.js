import AbstractView from "../../../AbstractView";
import { getMistakesTemplate } from "../components-templates";
import TimerView from "../timer-view";

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getPlayerWrapperTemplate = (songSrc) => {
  return `<div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}"></audio>
              <button class="player-control player-control--play js-song-play" type="button"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>`;
};

const getGenreAnswerTemplate = (answerNumber, songName, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(songSrc)}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
            <label class="genre-answer-check" for="a-${answerNumber}"></label>
          </div>`;
};

const getScreenLevelGenreTemplate = (state, question) => {
  return `<section class="main main--level main--level-genre js-main">
            ${new TimerView().template}
            ${getMistakesTemplate(state)}
            <div class="main-wrap">
              ${getTitleTemplate(question.question)}
               <form class="genre js-genre">
                ${question.answers.reduce((returnMsg, answers, i) => {
                  return (returnMsg + getGenreAnswerTemplate(i + 1, answers.genre, answers.src));
                }, ``)}
                ${answerSendButtonTemplate}
               </form>
            </div>
          </section>`;
};

export default class LevelGenreView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
  }

  get template() {
    return getScreenLevelGenreTemplate(this.state, this.question);
  };

  onClick() {
  };

  bind() {
    const genreAnswersInputs = [...this.element.querySelectorAll(`.js-genre-answer-input`)];
    const sendButton = this.element.querySelector(`.js-genre-answer-send`);
    sendButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClick();
    });
    
    genreAnswersInputs.forEach(it => it.checked = false);
    const onGenreAnswerClick = () => {
      sendButton.disabled = !(genreAnswersInputs.some((it) => it.checked));
    };
    onGenreAnswerClick();
    genreAnswersInputs.forEach(it => it.addEventListener(`change`, onGenreAnswerClick));
  };
};