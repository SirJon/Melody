import { initialState } from "../data/game";
import Router from "../game/Router";
import WelcomView from "../view/welcome-view";

export default class WelcomScreen {
  constructor() {
    this.screen = new WelcomView(initialState);
    this.bind();
  }

  get element() {
    return this.screen.element
  }

  bind() {
    this.screen.onClick = () => Router.startGame()
  }
}