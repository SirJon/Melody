export class ToggleMenu {
  constructor(options) {
    this.nameClass = options.nameClass;
    this.overflowBody = options.overflowBody;
    this.toggleClass = options.toggleClass;

    const toggle = this.toggleClass ? this.toggleClass : this.nameClass;

    const html = document.querySelector(`html`);
    let scrollPosition = 0;
    const DESKTOP_WIGTH = 1280;

    const bodyLock = () => {
      if (this.overflowBody && html !== undefined) {
        scrollPosition = window.pageYOffset;
        window.innerWidth < DESKTOP_WIGTH ? html.style.position = 'fixed' : null;
        html.style.overflow = 'hidden';
        html.style.top = `-${scrollPosition}px`;
      }
    };

    const bodyUnLock = () => {
      if (this.overflowBody && html !== undefined) {
        html.style.position = '';
        html.style.overflow = '';
        window.scrollTo(0, scrollPosition);
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