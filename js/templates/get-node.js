export const getNode = (string) => {
  let node = document.createElement(`div`);
  node.innerHTML = string;

  return node.firstChild;
};