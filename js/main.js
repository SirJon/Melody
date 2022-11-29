import { initialState } from "./data/game";
import LevelGenreView from "./templates/screens/level-genre/level-genre-view";
import getScreenWelcome from "./templates/screens/welcome/welcome";
import showScreen from "./utils/show-screen";

showScreen(getScreenWelcome(initialState));