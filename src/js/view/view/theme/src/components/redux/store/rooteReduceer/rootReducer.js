import { BASE, EN, FULL, OPTIONS, R1300, R800, RU } from "../../utils/types";

export function rootReducer(state, action) {
  switch (action.type) {
    case RU:
      localStorage.language = RU;
      return state = 'language';
    case EN:
      localStorage.language = EN;
      return state = 'language';
    case R1300:
      sessionStorage.mashine = R1300;
      return state = 'mashine';
    case R800:
      sessionStorage.mashine = R800;
      return state = 'mashine';
    case BASE:
      sessionStorage.complect = BASE;
      return state = 'complect';
    case OPTIONS:
      sessionStorage.complect = OPTIONS;
      return state = 'complect';
    case FULL:
      sessionStorage.complect = FULL;
      return state = 'complect';
    default:
      return state = action.type;
  }
}