export const videoPlay = ({ selector, play, hide }) => {
  const video = document.querySelector(selector);
  const button = document.querySelector(play);
  button.addEventListener(`click`, (e) => {
    e.preventDefault();
    button.style.display = `none`;
    video.play();
    hide ? hide.forEach(it => document.querySelector(`${it}`).style.display = `none`) : null;
  })
}