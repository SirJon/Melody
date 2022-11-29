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
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Пелагея",
        "isCorrect": false
      },
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Краснознамённая дивизия имени моей Бабушки",
        "isCorrect": false
      },
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Кровосток",
        "isCorrect": true
      }
    ]
  }
];