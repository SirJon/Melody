import "../sass/style.scss";
import { initialState } from "./data/game";
import Router from "./game/Router";
import WelcomScreen from "./screen/welcome-screen";
import getScreenWelcome from "./templates/screens/welcome/welcome";
import showScreen from "./utils/show-screen";

// showScreen(getScreenWelcome(initialState));
Router.start()