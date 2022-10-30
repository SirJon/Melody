const app = document.querySelector(`.js-app`);

let oldScreen;
let newScreen;

export const getNode = (string) => {
  let node = document.createElement(`div`);
  node.innerHTML = string;

  return node.firstChild;
};

export const showScreen = (screen) => {
  oldScreen = app.querySelector(`.js-main`);
  newScreen = screen;
  app.replaceChild(newScreen, oldScreen);
};

export const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}