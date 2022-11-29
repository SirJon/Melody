import "../sass/style.scss";
import { initialState } from "./data/game";
import getScreenWelcome from "./templates/screens/welcome/welcome";
import showScreen from "./utils/show-screen";

showScreen(getScreenWelcome(initialState));