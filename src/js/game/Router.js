import WelcomScreen from "../screen/welcome-screen";
import showScreen from "../utils/show-screen";
import GameController from "./GameController";
import GameModel from "./GameModel";

export default class Application {
  static start() {
    const welcome = new WelcomScreen();
    showScreen(welcome.element);
  }

  static startGame() {
    const model = new GameModel();
    const gameController = new GameController(model);
    gameController.showNextGame();
  }

  static nextLevel(model) {

    // Если кончилось время или игрок совершил максимально возможное количество ошибок
    if (model.fail()) {
      this.failGame(model);
      return;
    };

    // Если игрок в процессе игры
    if (model.hasLevel()) {
      const gameController = new GameController(model);
      gameController.showNextGame();
      return;
    };

    // Если игрок прошел все уровни
    if (model.win()) {
      this.winGame(model);
    };
    
  }

  static winGame(model) {
    // const statistics = new StatsScreen(stats);
    // showScreen(statistics.element);
    console.log(`winGame`);
  }

  static failGame(model) {
    console.log(`FailScreen`);
  }
}