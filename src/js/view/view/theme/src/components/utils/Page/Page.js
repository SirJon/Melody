let scrollPosition = 0;
const DESKTOP_WIGTH = 1280;

const html = document.querySelector(`html`);

export function Page() {
  this.lock = () => {
    // scrollPosition = window.pageYOffset;
    // window.innerWidth < DESKTOP_WIGTH ? html.style.position = 'fixed' : null;
    html.style.overflow = 'hidden';
    // html.style.top = `-${scrollPosition}px`;
  };
  this.unLock = () => {
    // html.style.position = '';
    html.style.overflow = '';
    // window.scrollTo(0, scrollPosition);
  };
}
