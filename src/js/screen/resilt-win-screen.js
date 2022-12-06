import Router from "../game/Router";
import ResultWinView from "../view/resilt-win-view";

export default class ResultWinScreen {
  constructor(state) {
    this.screen = new ResultWinView(state);
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
    this.screen.onClick = () => Router.start();
  }
};