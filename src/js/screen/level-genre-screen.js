import Router from "../game/Router";
import { getNode } from "../utils";
import LevelGenreView from "../view/level-genre-view";

export default class LevelGenreScreen {
  constructor(GameSettings, state, question) {
    this.screen = new LevelGenreView(GameSettings, state, question);
    this.bind();
  }

  get element() {
    return this.screen.element
  }

  render() {
    return (this.element);
  }

  bind() {
    this.screen.onClick = () => Router.startGame()
  }
};