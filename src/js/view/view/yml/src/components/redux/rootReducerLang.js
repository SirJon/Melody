export function rootReducerLang(state, action) {
  localStorage.getItem(`language`) == null ? localStorage.setItem(`language`, `ru`) : null;
  if (action.lang !== undefined){
    localStorage.setItem(`language`, action.lang);
    return state = action.lang;
  } else {
    return state
  };
}