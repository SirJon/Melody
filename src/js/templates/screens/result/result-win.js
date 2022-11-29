import showScreen from "../../../utils/show-screen";
import controlGame from "../../control-game";
import getScreenWelcome from "../welcome/welcome";
import ResultWin from "./resilt-win-view";

const getScreenResultWin = (state, question) => {
  const screenResultWin = new ResultWin(state, question);

  screenResultWin.onClick = () => {
    // controlGame(state);
  };

  screenResultWin.onLogo = () => {
    // showScreen(getScreenWelcome());
  };

  return screenResultWin.element;
};

export default getScreenResultWin;