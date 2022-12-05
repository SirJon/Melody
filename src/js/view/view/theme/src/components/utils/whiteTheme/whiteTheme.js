const page = document.querySelector(`.page`);
const pageCurrent = document.querySelector(`main`).dataset.page;
const whitePage = `page--white`;
pageCurrent != `index` ? page.classList.add(whitePage) : null;