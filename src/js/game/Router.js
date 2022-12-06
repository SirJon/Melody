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
    if (model.hasLevel()) {
      const gameController = new GameController(model);
      gameController.showNextGame();
    } else {
      this.endGame(model)
    }
  }

  static endGame(model) {
    // const statistics = new StatsScreen(stats);
    // showScreen(statistics.element);
    console.log(model);
  }
}