import { initialState } from "../../../data/game";
import showScreen from "../../../utils/show-screen";
import controlGame from "../../control-game";
import resetState from "../../resetState";
import getScreenWelcome from "../welcome/welcome";
import ResultWin from "./resilt-win-view";

const getScreenResultWin = (playersStats, currentPlayer) => {
  const screenResultWin = new ResultWin(playersStats, currentPlayer);

  screenResultWin.onClick = () => {
    resetState();
    controlGame(initialState);
  };

  screenResultWin.onLogo = () => {
    resetState();
    showScreen(getScreenWelcome(initialState));
  };

  return screenResultWin.element;
};

export default getScreenResultWin;