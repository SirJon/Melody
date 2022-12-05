export class ToggleMenu {
  constructor(options) {
    this.nameClass = options.nameClass;
    this.overflowBody = options.overflowBody;
    this.toggleClass = options.toggleClass;

    const toggle = this.toggleClass ? this.toggleClass : this.nameClass;

    const body = document.querySelector(`body`);

    const bodyLock = () => {
      if (this.overflowBody && body !== undefined) {
        body.style.overflow = 'hidden';
      }
    };

    const bodyUnLock = () => {
      if (this.overflowBody && body !== undefined) {
        body.style.overflow = '';
      }
    };

    if (this.nameClass !== undefined) {
      const menu = document.querySelector(`.${this.nameClass}`);
      this.close = () => {
        menu.classList.remove(`${toggle}--open`);
        menu.classList.add(`${toggle}--close`);
        bodyUnLock();
      }
      this.open = () => {
        menu.classList.remove(`${toggle}--close`);
        menu.classList.add(`${toggle}--open`);
        bodyLock();
      }
      this.toggle = () => {
        if (menu.classList.contains(`${toggle}--close`)) {
          this.open();
        } else {
          this.close()
        };
      };
    }
  }
}