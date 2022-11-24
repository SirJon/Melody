import WelcomView from "./welcome-view";

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomView();

  screenWelcome.onClick = () => {
    controleGame(state)
  };

  return screenWelcome.element;
};

export default getScreenWelcome;