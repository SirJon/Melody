import { currentPlayer, initialState } from '../data/game.js';
import controlGame from './control-game.js';

const initReplay = () => {
  initialState.resetToDefault();
  currentPlayer.resetToDefault();
  controlGame(initialState);
};

export default initReplay;