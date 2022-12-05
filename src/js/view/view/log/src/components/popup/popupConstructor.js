export function popupConstructor ({ selector, overflow, classShow, classHide }) {
  this.addMethod = function(name, func) {
    this[name] = func;
  }
  classShow = classShow !== undefined ? classShow : `popup--show`;
  classHide = classHide !== undefined ? classHide : `popup--hide`;

  let scrollPosition = 0;
  const DESKTOP_WIGTH = 1280;

  const html = document.querySelector(`html`);

  const htmlLock = () => {
    if (overflow && html !== undefined) {
      scrollPosition = window.pageYOffset;
      window.innerWidth < DESKTOP_WIGTH ? html.style.position = 'fixed' : null;
      html.style.overflow = 'hidden';
      html.style.top = `-${scrollPosition}px`;
    };
  };

  const htmlUnLock = () => {
    if (overflow && html !== undefined) {
      html.style.position = '';
      html.style.overflow = '';
      window.scrollTo(0, scrollPosition);
    };
  };

  if (selector !== undefined) {
    const popup = document.querySelector(`${selector}`);
    this.close = () => {
      popup.classList.remove(`${classShow}`);
      popup.classList.add(`${classHide}`);
      htmlUnLock();
    };
    this.open = () => {
      popup.classList.add(`${classShow}`);
      popup.classList.remove(`${classHide}`);
      htmlLock();
    };
    this.toggle = () => {
      if (popup.classList.contains(`${classShow}`)) {
        close();
      } else {
        open()
      };
    };
  }
}