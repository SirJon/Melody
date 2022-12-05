export const anchor = ({ selector }) => {
  const el = document.querySelector(`${selector}`);

  el.addEventListener(`click`, (e) => {
    e.preventDefault();
    document.querySelector(`#${el.href.split('#').pop()}`).scrollIntoView(true);
    window.scrollBy(0, -100);
  });
};