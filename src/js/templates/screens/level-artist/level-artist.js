import controlGame from "../../control-game";
import LevelArtistView from "./level-artist-view";

const getScreenLevelArtist = (state, question) => {
  const screenLevelArtist = new LevelArtistView(state, question);

  screenLevelArtist.onClick = () => {
    controlGame(state);
  };

  return screenLevelArtist.element;
};

export default getScreenLevelArtist;