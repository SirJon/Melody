(function () {
'use strict';

const GameSettings = {
  MAX_GAME_TIME: 300, // секунды
  MAX_QUICK_ANSWER_TIME: 30, // секунды
  MIN_TIMER_DANGER_ZONE: 30, // секунды
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10
};

const initialState = {
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

const currentPlayer = {
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



const questions = [
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

const app = document.querySelector(`.js-app`);

const getNode = (string) => {
  let node = document.createElement(`div`);
  node.innerHTML = string.trim();

  return node.firstChild;
};

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template(){
    throw new Error(`Abstract method called`);
  }

  render() {
    return getNode(this.template);
  }

  bind(){
    throw new Error(`Abstract method called`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}

const logoTemplate = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;



const getMistakesTemplate = (state) => {
  return `<div class="main-mistakes">
            ${new Array(state.mistakes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
          </div>`;
};

class TimerView {
  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
              <circle
                cx="390" cy="390" r="370"
                class="timer-line"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
              </circle>

              <div class="timer-value js-timer-value" xmlns="http://www.w3.org/1999/xhtml">
                <span class="timer-value-mins js-timer-value-mins">00</span><!--
                --><span class="timer-value-dots js-timer-value-dots">:</span><!--
                --><span class="timer-value-secs js-timer-value-secs">00</span>
              </div>
            </svg>`;
  }

  updateTime(seconds) {

  }
}

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getPlayerWrapperTemplate = (songSrc) => {
  return `<div class="player-wrapper">
            <div class="player">
              <audio src="${songSrc}"></audio>
              <button class="player-control player-control--play js-song-play"></button>
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

class LevelGenreView extends AbstractView {
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

  onInputs() {

  }

  bind() {
    const genreAnswersInputs = [...this.element.querySelectorAll(`.js-genre-answer-input`)];
    // genreAnswersInputs.forEach(it => it.checked = false);
    const sendButton = this.element.querySelector(`.js-genre-answer-send`);
    // const onGenreAnswerClick = () => {
    //   sendButton.disabled = !(genreAnswersInputs.some((it) => it.checked));
    // };
    // onGenreAnswerClick();
    // genreAnswersInputs.forEach(it => it.addEventListener(`change`, onGenreAnswerClick));
    sendButton.addEventListener(`click`, this.onClick);
  };
}

const app$1 = document.querySelector(`.js-app`);

const showScreen = (screen) => {
  const oldScreen = app$1.querySelector(`.js-main`);
  const newScreen = screen;
  app$1.replaceChild(newScreen, oldScreen);
};

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  tick() {
    if (this.seconds <= 0) {
      return -1;
    }

    return --this.seconds;
  }
}

const createGameTimer = (state, maxGameTime) => {
  state.timer = new Timer(maxGameTime);
};

// Запускаем таймер
const startGameTimer = (state, minTimerDangerZone) => {
  return setInterval(() => {

    // Когда осталось менее 30 секунд таймер должен начать мигать красным цветом
    if (state.timer.seconds < minTimerDangerZone) {}

    state.timer.tick();
  }, 1000);
};

const getScreenLevelGenre = (state, questions) => {
  const screenLevelGenre = new LevelGenreView(state, questions);

  screenLevelGenre.onClick = () => {
    controlGame(state);
  };

  return screenLevelGenre.element;
};

let gameTimer;

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question) => {
  if (question.type === `artist`) {
    // showScreen(getScreenLevelArtist(state, question));
    console.log(`artist`);
    return;
  }

  if (question.type === `genre`) {
    showScreen(getScreenLevelGenre(state, question));
  }
};

const controlGame$1 = (state) => {

  // Проверяем запущен ли игровой таймер, если нет, то запускаем
  // Срабатывает перед показом первого уровня каждой отдельной игры
  // Располагается тут, чтобы при завершении игры таймер можно было почистить через clearInterval
  if (state.timer === null) {
    createGameTimer(state, GameSettings.MAX_GAME_TIME);
    gameTimer = startGameTimer(state, GameSettings.MIN_TIMER_DANGER_ZONE);
  }

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    clearInterval(gameTimer);
    // showScreen(getScreenFailResult(state));
    console.log(`совершил максимально возможное количество ошибок`);
    initReplay();
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    checkQuestionType(state, questions[state.level], currentPlayer);
    state.level++;
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    clearInterval(gameTimer);
    // showScreen(getScreenWinResult(GameSettings.MAX_QUICK_ANSWER_TIME, state, currentPlayer, playersStats));
    console.log(`Прошёл все уровни`);
    initReplay();
  }
};

const startButtonTemplate = `<button class="main-play js-main-start">Начать игру</button>`;
const infoTemplate = `
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты — за 5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
</p>`.trim();
const screenWelcomeTemplate = `
<section class="main main--welcome js-main">
  ${logoTemplate}
  ${startButtonTemplate}
  ${infoTemplate}
</section>`.trim();

class WelcomView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  };

  get template() {
    return screenWelcomeTemplate;
  };

  onClick(){
  };

  bind() {
    const playButton = this.element.querySelector(`.js-main-start`);
    playButton.addEventListener(`click`, this.onClick);
  };
}

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomView();

  screenWelcome.onClick = () => {
    controlGame$1(state);
  };

  return screenWelcome.element;
};

showScreen(getScreenWelcome(initialState));

}());

//# sourceMappingURL=main.js.map
