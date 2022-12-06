import Router from "../game/Router";
import LevelArtistView from "../view/level-artist-view";

export default class LevelArtistScreen {
  constructor(GameSettings, state, question, model) {
    this.screen = new LevelArtistView(GameSettings, state, question);
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