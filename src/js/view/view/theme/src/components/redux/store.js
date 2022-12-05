import { language } from "../content/changeContent/language";
import { mashine } from "../content/changeContent/mashine";
import { languageChange } from "../language/languageChange";
import { changeMashine } from "../utils/changeMashine/changeMashine";
import { createStore } from "./store/createStore";
import { rootReducer } from "./store/rooteReduceer/rootReducer";
import { initComplect, initLang, initMashine } from "./utils/actions";

export const store = createStore(rootReducer, initLang());

const iLang = () => {
  store.dispatch(initLang());
};
const iMashine = () => {
  store.dispatch(initMashine());
};
const iComplect = () => {
  store.dispatch(initComplect());
};

setTimeout(iLang, 10);
setTimeout(iMashine, 10);
setTimeout(iComplect, 10);

const changeLang = () => {
  languageChange(language, localStorage.getItem(`language`));
};
const changeBlowingMashien = () => {
  changeMashine({
    content: mashine[sessionStorage.getItem(`mashine`)].content[localStorage.getItem(`language`)],
    img: mashine[sessionStorage.getItem(`mashine`)].img,
  });
}

store.subscribe(() => {
  if (store.getState() == `language`) {
    changeLang();
  };
});

store.subscribe(() => {
  if (store.getState() == `mashine` || store.getState() == `language`){
    changeBlowingMashien();
  }
});