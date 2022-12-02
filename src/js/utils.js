const app = document.querySelector(`.js-app`);

export const getNode = (string) => {
  let node = document.createElement(`div`);
  node.innerHTML = string.trim();

  return node.firstChild;
};