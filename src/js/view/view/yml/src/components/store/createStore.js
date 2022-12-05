export function createStore(rootReducer, initialState) {
  //Init state
  localStorage.getItem(`language`) == `null` ? localStorage.setItem(`language`, `ru`) : null;
  localStorage.getItem(`language`) == null ? localStorage.setItem(`language`, `ru`) : null;
  let state = rootReducer(initialState, {lang: localStorage.getItem(`language`)});
  const subscribers = []

  return {
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(subFn => subFn())
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return state
    },
  }
}