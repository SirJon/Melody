import { currentPlayer, initialState } from '../data/game.js';

const resetState = () => {
  initialState.resetToDefault();
  currentPlayer.resetToDefault();
};

export default resetState;