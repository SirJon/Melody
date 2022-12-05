import { createStore } from "./createStore";
import { rootReducerLang } from "../redux/rootReducerLang";

let localState = localStorage.getItem(`language`);
localState == null ? localState = `ru` : null;
export const store = createStore(rootReducerLang, localState);