import { GameSettings, questions, currentPlayer, playersStats } from "../data/game";
import {createGameTimer, startGameTimer} from "../data/game-timer";
import showScreen from "../utils/show-screen";
import getScreenLevelArtist from "./screens/level-artist/level-artist";
import getScreenLevelGenre from "./screens/level-genre/level-genre";
import getScreenResultFalse from "./screens/result/result-false";
import getScreenResultWin from "./screens/result/result-win";
let gameTimer;

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question) => {
  console.log(state)
  if (question.type === `artist`) {
    showScreen(getScreenLevelArtist(state, question));
    return;
  }

  if (question.type === `genre`) {
    showScreen(getScreenLevelGenre(state, question));
    return;
  }
};

const controlGame = (state) => {

  // Проверяем запущен ли игровой таймер, если нет, то запускаем
  // Срабатывает перед показом первого уровня каждой отдельной игры
  // Располагается тут, чтобы при завершении игры таймер можно было почистить через clearInterval
  if (state.timer === null || state.timer === 0 ) {
    createGameTimer(state, GameSettings.MAX_GAME_TIME);
    gameTimer = startGameTimer(state, GameSettings.MIN_TIMER_DANGER_ZONE);
  }

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    clearInterval(gameTimer);
    showScreen(getScreenResultFalse(state));
    console.log(`кончилось время или совершил максимально возможное количество ошибок`);
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    currentPlayer.getResult();
    checkQuestionType(state, questions[state.level], currentPlayer);
    currentPlayer.answers.push({
      correctly: true,
      time: 31,
    })
    state.level++;
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    clearInterval(gameTimer);
    // showScreen(getScreenWinResult(GameSettings.MAX_QUICK_ANSWER_TIME, state, currentPlayer, playersStats));
    currentPlayer.getResult();
    showScreen(getScreenResultWin(playersStats, currentPlayer));
  }
};


export default controlGame;