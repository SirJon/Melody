import LevelGenreView from "./level-genre-view";

const getScreenLevelGenre = (state, questions) => {
  const screenLevelGenre = new LevelGenreView(state, questions);

  screenLevelGenre.onClick = () => {
    controlGame(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;

