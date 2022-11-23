import AbstractView from "../../../AbstractView";
import { answerSendButtonTemplate, getMistakesTemplate } from "../components-templates";
import TimerView from "../timer-view";

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getGenreAnswerTemplate = (answerNumber, songName, questionType, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(questionType, songSrc)}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
            <label class="genre-answer-check" for="a-${answerNumber}"></label>
          </div>`;
};

const getScreenLevelGenreTemplate = (state, question) => {
  return `<section class="main main--level main--level-genre js-main">
            ${new TimerView().template}
            ${getMistakesTemplate(state)}
            <div class="main-wrap">
              ${getTitleTemplate(question.title)}
               <form class="genre js-genre">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, answer.name, question.type, answer.src), ``)}
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

  onClick(){
  };

  bind() {
    const genreAnswersInputs = [...this.element.querySelectorAll(`.js-genre-answer-input`)];
    genreAnswersInputs.forEach(it => it.checked = false);
    const sendButton = this.element.querySelector(`.js-genre-answer-send`);
    const onGenreAnswerClick = () => {
      sendButton.disabled = !(genreAnswersInputs.some((it) => it.checked));
    };
    onGenreAnswerClick();
    genreAnswersInputs.forEach(it => it.addEventListener(`change`, onGenreAnswerClick));
    sendButton.addEventListener(`click`, this.onClick);
  };
};