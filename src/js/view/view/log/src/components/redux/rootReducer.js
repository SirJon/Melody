export function rootReducer(state, action) {
  if (action.type === `EN`){
    return state = `EN`
  } else if (action.type === `RU`){
    return state = `RU`
  }   
  return state
}