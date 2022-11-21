import { getRandomValue, showScreen } from "./utils";
import { WelcomView } from "./templates/screens/welcome/welcome-view";
import { LevelGenreView } from "./templates/screens/level-genre/level-genre-view";
import { initScreenLevelArtist, screenLevelArtist } from "./templates/screens/level-artist";
import LevelArtistView from "./templates/screens/level-artist/level-artist-view";
import { initScreenResultWin, screenResultWin } from "./templates/screens/result-win";
import { initScreenResultAttemptsEnd, screenResultAttemptsEnd } from "./templates/screens/result-attempts-end";
import { initScreenResultTimeOver, screenResulTimeOver } from "./templates/screens/result-time-over";
import ResultWin from "./templates/screens/result/resilt-win-view";
import ResultFalse from "./templates/screens/result/result-false-view";

// const welcomView = new WelcomView;
// const levelGenreView = new LevelGenreView;
const levelArtistView =  new LevelArtistView;
// showScreen(screenResultWin);

const result = new ResultFalse;
showScreen(result.element);

// welcomView.onClick = () => {
//   showScreen(levelGenreView.element);
// };
// showScreen(welcomView.element);

// levelGenreView.onClick = () => {
//   showScreen(levelArtistView.element);
// };

// levelArtistView.onClick = () => {
//   const screen = getRandomValue(1, 3);
//   switch (screen) {
//     case 1:
//       showScreen(screenResultWin);
//       initScreenResultWin();
//       break;
//     case 2:
//       showScreen(screenResultAttemptsEnd);
//       initScreenResultAttemptsEnd();
//       break;
//     case 3:
//       showScreen(screenResulTimeOver);
//       initScreenResultTimeOver();
//       break;
//   };
//   console.log(`click`)
// }