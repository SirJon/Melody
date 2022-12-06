// import { questions } from "../data/game";


// export default class GameModel {
//   constructor(questions, initialState) {
//     //Хранит состояние и полностью им управляет
//     this.MAX_GAME_TIME = 300;
//     this.MAX_QUICK_ANSWER_TIME = 30;
//     this.MIN_TIMER_DANGER_ZONE = 30;
//     this.MAX_COUNT_MISTAKES = 3;
//     // this.MAX_COUNT_LEVELS = questions.length

//     this.initialState = Object.freeze(initialState);

//     this.timer = null;
//     this.mistakes = 0;
//     this.level = 0;
//     this.score = 0;
//   };

//   get state() {
//     return Object.freeze(this._state);
//   }

//   nextScreen() { }

//   getCurrentScreen() { }

//   failScreen() { }

//   welcomeScreen() { }

//   isFail() {
//     return this._state.mistakes === this.MAX_COUNT_MISTAKES || this._state.time === 0;
//    }

//   restart() {
//     this._state = this.initialState;
//    }

//   tick() { }

//   hasNextLevel() {
//     return getLevel(this._state.level + 1) !== void 0;
//   }
// }

import { initialState } from "../data/game";

const getScreenQuestion = (state) => state.questions[state.level];

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.assign({}, this._state);
  }

  screenQuestion() {
    return getScreenQuestion(this._state);
  }

  changeLevel() {
    return this._state.level++;
  }

  getLevel(level) {
    return this._state.questions[level];
  }


  hasLevel() {
    return this.getLevel(this._state.level) !== void 0;
  }

  restart() {
    this._state = Object.assign({}, initialState, { answers: [] });
  }

  fail() {
    return this._state.lives === 0 || this._state.time <= 0;
  }

  win() {
    return this._state.level === this._state.questions.length;
  }

  getAnswerTime() {
    return initialState.time - this._state.time;
  }

  getAnswers(answer) {
    const correct = Object.keys(this.screenQuestion().answers).every((key) => this.screenQuestion().answers[key].correct === answer.includes(key));
    if (!correct) {
      this._state.lives--;
    }
    this._state.answers.push({ correct, time: this.getAnswerTime() });
  }

  tick() {
    this._state.time--;
  }

}