import controlGame from "../../control-game";
import LevelArtistView from "./level-artist-view";

const getScreenLevelArtist = (GameSettings, state, question) => {
  const screenLevelArtist = new LevelArtistView(GameSettings, state, question);

  screenLevelArtist.onClick = () => {
    controlGame(state);
  };

  return screenLevelArtist.element;
};

export default getScreenLevelArtist;