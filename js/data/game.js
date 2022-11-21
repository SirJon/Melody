import songs from './songs.js';

export const GameSettings = {
  MAX_GAME_TIME: 300, // секунды
  MAX_QUICK_ANSWER_TIME: 30, // секунды
  MIN_TIMER_DANGER_ZONE: 30, // секунды
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10
};

export const initialState = {
  timer: null,
  mistakes: 0,
  level: 0,
  get time() {
    if (this.timer === null) {
      return GameSettings.MAX_GAME_TIME;
    }

    return this.timer.seconds;
  },
  resetToDefault() {
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
  }
};

export const questions = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[1].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[1].artist
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[2]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[0].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[0].artist
  },
  {
    type: `genre`,
    title: `Выберите поп треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[4]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[2].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[2].artist
  },
  {
    type: `genre`,
    title: `Выберите электронные треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: songs[5]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[5].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[5].artist
  },
  {
    type: `genre`,
    title: `Выберите джаз треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: songs[0]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    song: songs[4].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[4].artist
  },
  {
    type: `genre`,
    title: `Выберите рок треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: songs[1]
  }
];

export const currentPlayer = {
  score: 0,
  remainingTime: initialState.time,
  remainingNotes: GameSettings.MAX_COUNT_NOTES - initialState.mistakes,
  answers: [], // массив объектов, каждый объект содержит ключ correctly с значением true или false и ключ time с числовым значением в секундах
  get spentTime() {
    return GameSettings.MAX_GAME_TIME - initialState.time;
  },
  resetToDefault() {
    this.score = 0;
    this.remainingTime = initialState.time;
    this.remainingNotes = GameSettings.MAX_COUNT_NOTES - initialState.mistakes;
    this.answers = [];
  }
};

export const playersStats = [4, 5, 8, 10, 11, 15, 19];