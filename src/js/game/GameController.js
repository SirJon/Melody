import { GameSettings, initialState, questions } from "../data/game";
import LevelArtistScreen from "../screen/level-artist-screen";
import LevelGenreScreen from "../screen/level-genre-screen";
import showScreen from "../utils/show-screen";
import ResultWinView from "../view/resilt-win-view";
import ResultFalseView from "../view/result-false-view";

const QuestionScreen = {
  artist: LevelArtistScreen,
  genre: LevelGenreScreen,
};

export default class GameController {
  constructor(model) {
    this.model = model;
    this._timer = null;
    this.screen = new QuestionScreen[`${this.model.state.getQuestionsType()}`](this.model.state.gameSettings, this.model.state, this.model.screenQuestion());

    console.log(this.model)

    //таймеры работали, игра переключалась, жизни отнемались, игра отсанавливалась
  }

  get element() {
    return this.screen.render();
  }

  showNextGame() {
    showScreen(new GameController(this.model).element);
    this.model.changeLevel();
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