import Router from "../game/Router";
import LevelGenreView from "../view/level-genre-view";

export default class LevelGenreScreen {
  constructor(GameSettings, state, question, model) {
    this.screen = new LevelGenreView(GameSettings, state, question);
    this.bind();

    this.model = model;
  }

  get element() {
    return this.screen.element
  }

  render() {
    return (this.element);
  }

  bind() {
    this.screen.onClick = () => Router.nextLevel(this.model);
  }
};