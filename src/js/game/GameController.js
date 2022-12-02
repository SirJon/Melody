import { questions } from "../data/game";
import showScreen from "../utils/show-screen";
import LevelArtistView from "../view/level-artist-view";
import LevelGenreView from "../view/level-genre-view";
import ResultWinView from "../view/resilt-win-view";
import ResultFalseView from "../view/result-false-view";

const questionView = {
  level: LevelArtistView,
  genre: LevelGenreView,
}

export default class GameController {
  constructor(model) {
    this.model = model;

    this._timer = null;

    //таймеры работали, игра переключалась, жизни отнемались, игра отсанавливалась
  }

  get element() {
    return (new questionView.level().render());
  }

  startGame() {
    showScreen(this.element);
  }

  stopGame() { }

  endGame() { }

  changeScreen(screen) { }

  updateAnswer() { }

  restart() { }

  exit() { }

  startTime() { }

  stopTime() { }
}