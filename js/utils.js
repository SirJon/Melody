const app = document.querySelector(`.js-app`);

let node;
let oldScreen;
let newScreen;

export const getNode = (string) => {
  node = document.createElement(`div`);
  node.innerHTML = string;

  return node.firstChild;
};

export const showScreen = (screen) => {
  oldScreen = app.querySelector(`.js-main`);
  newScreen = screen;
  app.replaceChild(newScreen, oldScreen);
};