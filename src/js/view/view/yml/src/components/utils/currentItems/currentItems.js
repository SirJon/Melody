const main = document.querySelector(`main`);
const items = document.querySelectorAll(`.main-nav__item`);
items.forEach(it => {
  it.dataset.page == main.dataset.page ? it.classList.add(`main-nav__item--activ`) : null;
});