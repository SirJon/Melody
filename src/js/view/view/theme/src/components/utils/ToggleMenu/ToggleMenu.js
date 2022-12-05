import { Page } from "../Page/Page";
export class ToggleMenu {
  constructor(options) {
    this.nameClass = options.nameClass;
    this.overflow = options.overflow;
    this.toggleClass = options.toggleClass ? options.toggleClass : this.nameClass;
    this.menu = document.querySelector(`.${this.nameClass}`);
    this.page = new Page();
  }

  close() {
    if (this.nameClass !== undefined) {
      this.menu.classList.remove(`${this.toggleClass}--open`);
      this.menu.classList.add(`${this.toggleClass}--close`);
      this.overflow === true ? this.page.unLock() : null;
    }
  }
  open() {
    this.menu.classList.remove(`${this.toggleClass}--close`);
    this.menu.classList.add(`${this.toggleClass}--open`);
    this.overflow === true ? this.page.lock() : null;
  }
  toggle() {
    if (this.menu.classList.contains(`${this.toggleClass}--close`)) {
      this.open();
    } else {
      this.close()
    };
  }
};  