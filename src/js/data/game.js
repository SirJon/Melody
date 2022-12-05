import { gamePlayerPointsScored } from "./game-player-points-scored";

export const questions = [
  {
    "type": "genre",
    "question": "Выберите все песни в жанре R'n'B",
    "genre": "rnb",
    "answers": [
      {
        "src": "/path/to/file.mp3",
        "genre": "rnb"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "blues"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rock"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rnb"
      }
    ]
  },
  {
    "type": "artist",
    "question": "Кто исполняет эту песню?",
    "src": "path/to/file.mp3",
    "answers": [
      {
        "image": {
          "url": "https://placekitten.com/705/455",
          "width": 134,
          "height": 134
        },
        "title": "Пелагея",
        "isCorrect": false
      },
      {
        "image": {
          "url": "https://placekitten.com/703/455",
          "width": 134,
          "height": 134
        },
        "title": "Краснознамённая дивизия имени моей Бабушки",
        "isCorrect": false
      },
      {
        "image": {
          "url": "https://placekitten.com/705/456",
          "width": 134,
          "height": 134
        },
        "title": "Кровосток",
        "isCorrect": true
      }
    ]
  },
  {
    "type": "genre",
    "question": "Выберите все блюзовые песни",
    "genre": "blues",
    "answers": [
      {
        "src": "/path/to/file.mp3",
        "genre": "blues"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "pop"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rock"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rnb"
      }
    ]
  },
  {
    "type": "artist",
    "question": "Кто исполняет эту песню?",
    "src": "path/to/file.mp3",
    "answers": [
      {
        "image": {
          "url": "https://placekitten.com/704/455",
          "width": 134,
          "height": 134
        },
        "title": "Цой",
        "isCorrect": false
      },
      {
        "image": {
          "url": "https://placekitten.com/700/455",
          "width": 134,
          "height": 134
        },
        "title": "Луна",
        "isCorrect": false
      },
      {
        "image": {
          "url": "https://placekitten.com/702/455",
          "width": 134,
          "height": 134
        },
        "title": "Matrang",
        "isCorrect": true
      }
    ]
  },
];

export const GameSettings = {
  MAX_GAME_TIME: 300, // секунды
  MAX_QUICK_ANSWER_TIME: 30, // секунды
  MIN_TIMER_DANGER_ZONE: 30, // секунды
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_LEVELS: questions.length,
};

export const initialState = {
  timer: null,
  mistakes: 0,
  level: 0,
  questions: questions,
  gameSettings: GameSettings,
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
  },
  getQuestionsType() {
    return this.questions[this.level].type;
  },
};

export const currentPlayer = {
  score: 0,
  remainingTime: initialState.time,
  remainingNotes: initialState.mistakes,
  answers: [], // массив объектов, каждый объект содержит ключ correctly с значением true или false и ключ time с числовым значением в секундах
  get spentTime() {
    return GameSettings.MAX_GAME_TIME - initialState.time;
  },
  resetToDefault() {
    this.score = 0;
    this.remainingTime = GameSettings.MAX_GAME_TIME - initialState.time;
    this.remainingNotes = initialState.mistakes;
    this.answers = [];
  },
  getResult() {
    this.score = gamePlayerPointsScored(this.answers, initialState.mistakes, GameSettings.MAX_QUICK_ANSWER_TIME, GameSettings.MAX_COUNT_MISTAKES);
    this.remainingTime = GameSettings.MAX_GAME_TIME - initialState.time;
    this.remainingNotes = initialState.mistakes;
  },
};

export const playersStats = [1, 2, 3, 5];