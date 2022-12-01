import controlGame from "../../control-game";
import LevelGenreView from "./level-genre-view";

const getScreenLevelGenre = (GameSettings, state, questions) => {
  const screenLevelGenre = new LevelGenreView(GameSettings, state, questions);

  screenLevelGenre.onClick = () => {
    controlGame(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;