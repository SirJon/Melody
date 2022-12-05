export function applyMiddleware(store, middlewares) {
  console.log(`store`, store);
  console.log(`middlewares`, middlewares);
  middlewares = middlewares.slice();
  middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
  return Object.assign({}, store, { dispatch });
};