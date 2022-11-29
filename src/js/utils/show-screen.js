const app = document.querySelector(`.js-app`);

const showScreen = (screen) => {
  const oldScreen = app.querySelector(`.js-main`);
  const newScreen = screen;
  app.replaceChild(newScreen, oldScreen);
};

export default showScreen;