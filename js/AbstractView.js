import {getNode} from "./utils";
export default class AbstractView {
  constructor() {
  }

  get template(){
    throw new Error(`Abstract method called`);
  }

  render() {
    getNode(this.template);
  }

  bind(){
    throw new Error(`Abstract method called`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
};