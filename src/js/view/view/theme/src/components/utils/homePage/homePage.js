const R1300Footer = document.querySelector(`#R1300_footer`);
const R800Footer = document.querySelector(`#R800_footer`);
const R1300Header = document.querySelector(`[for="R-1300-header"]`);
const R800Header = document.querySelector(`[for="R-800-header"]`);
const homeTransition = () => {
  window.location.href = '/';
}

R1300Footer.addEventListener(`click`, homeTransition);
R800Footer.addEventListener(`click`, homeTransition);
R1300Header.addEventListener(`click`, homeTransition);
R800Header.addEventListener(`click`, homeTransition);