import { initialState } from "../../../data/game";
import showScreen from "../../../utils/show-screen";
import controlGame from "../../control-game";
import resetState from "../../resetState";
import getScreenWelcome from "../welcome/welcome";
import ResultFalse from "./result-false-view";

const getScreenResultFalse = (state, question) => {
  const screenResultFalse = new ResultFalse(state, question);

  screenResultFalse.onClick = () => {
    resetState();
    controlGame(initialState);
  };

  screenResultFalse.onLogo = () => {
    resetState();
    showScreen(getScreenWelcome(initialState));
  };

  return screenResultFalse.element;
};

export default getScreenResultFalse;