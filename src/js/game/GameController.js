import LevelArtistScreen from "../screen/level-artist-screen";
import LevelGenreScreen from "../screen/level-genre-screen";
import showScreen from "../utils/show-screen";

const QuestionScreen = {
  artist: LevelArtistScreen,
  genre: LevelGenreScreen,
};

export default class GameController {
  constructor(model) {
    this.model = model;
    this._timer = null;
    this.screen = new QuestionScreen[`${this.model.state.getQuestionsType()}`](this.model.state.gameSettings, this.model.state, this.model.screenQuestion(), this.model);

    // console.log(this.model)


    //таймеры работали, игра переключалась, жизни отнемались, игра отсанавливалась
  }

  get element() {
    return this.screen.render();
  }

  showNextGame() {
    showScreen(this.element);
    this.model.changeLevel();
  }

  stopGame() { }

  endGame() { }

  updateAnswer() { }

  restart() { }

  exit() { }

  startTime() { }

  stopTime() { }
}