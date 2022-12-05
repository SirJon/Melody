export const changeNode = (lang) => {
  const node = document.querySelectorAll(`[data-nodeLang]`);
  node.forEach(it => it.style.display = 'none');
  const nodeCurrent = document.querySelectorAll(`[data-nodeLang="${lang}"]`);
  nodeCurrent.forEach(it => it.style.display = 'block');
};