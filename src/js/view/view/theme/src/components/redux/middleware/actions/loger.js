export function loger(state){
  return function(next){
    return function (action){
      return next(action);
    }
  }
}