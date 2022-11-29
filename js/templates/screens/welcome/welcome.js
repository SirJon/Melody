import { initialState, questions } from "../../../data/game";
import showScreen from "../../../utils/show-screen";
import controlGame from "../../control-game";
import getScreenLevelGenre from "../level-genre/level-genre";
import WelcomView from "./welcome-view";


const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomView();

  screenWelcome.onClick = () => {
    controlGame(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;