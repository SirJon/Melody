export default class GameModel {
  constructor(questions) {
    this.MAX_GAME_TIME = 300;
    this.MAX_QUICK_ANSWER_TIME = 30;
    this.MIN_TIMER_DANGER_ZONE = 30;
    this.MAX_COUNT_MISTAKES = 3;
    this.MAX_COUNT_LEVELS = questions.length

    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
    this.score = 0;
  };
}