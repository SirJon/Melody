import Router from "../game/Router";
import { getNode } from "../utils";
import LevelArtistView from "../view/level-artist-view";

export default class LevelArtistScreen {
  constructor(GameSettings, state, question) {
    this.screen = new LevelArtistView(GameSettings, state, question);
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