import { initLang } from "../utils/actions"

export function createStore(rootReducer, initialState) {
  //Init state
  let state = rootReducer(initialState, initLang())
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
};