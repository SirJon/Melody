import { GameSettings, questions, currentPlayer, playersStats } from "../data/game";
import {createGameTimer, startGameTimer} from "../data/game-timer";
import showScreen from "../utils/show-screen";
import initReplay from "./initreplay";
import getScreenLevelArtist from "./screens/level-artist/level-artist";
import getScreenLevelGenre from "./screens/level-genre/level-genre";
import getScreenResultWin from "./screens/result/result-win";
let gameTimer;

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question) => {
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
  if (state.timer === null) {
    createGameTimer(state, GameSettings.MAX_GAME_TIME);
    gameTimer = startGameTimer(state, GameSettings.MIN_TIMER_DANGER_ZONE);
  }

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    clearInterval(gameTimer);
    // showScreen(getScreenFailResult(state));
    console.log(`совершил максимально возможное количество ошибок`);
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
    showScreen(getScreenResultWin());
  }
};

export default controlGame;