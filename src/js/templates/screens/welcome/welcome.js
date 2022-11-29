import controlGame from "../../control-game";
import WelcomView from "./welcome-view";


const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomView();

  screenWelcome.onClick = () => {
    controlGame(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;