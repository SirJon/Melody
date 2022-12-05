import { Page } from "../Page/Page";
export class Popup {
  constructor(options) {
    this.selector = options.selector;
    this.overflow = options.overflow;
    this.classShow = options.classShow ? options.classShow : `popup--show`;
    this.node = options.node;

    this.page = new Page();
    this.body = document.querySelector(`body`);
  }

  close() {
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.remove(`${this.classShow}`);
    this.overflow === true ? this.page.unLock() : null;
  }

  open() {
    const popup = document.querySelector(`${this.selector}`);
    popup.classList.add(`${this.classShow}`);
    this.overflow === true ? this.page.lock() : null;

    const scroll = popup.querySelector(`.popup__scroll`);
    scroll !== null ? scroll.scroll(0, 0) : null;
  }

  toggle() {
    const popup = document.querySelector(`${this.selector}`);
    if (popup.classList.contains(`${this.classShow}`)) {
      close();
    } else {
      open()
    };
  }

  render() {
    this.body.appendChild(this.node);
  }
}