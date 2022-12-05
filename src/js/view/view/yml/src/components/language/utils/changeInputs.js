export const changeInputs = (lang) => {
  const inputs = document.querySelectorAll(`[data-inputlanguage="${lang}"]`);
  inputs.forEach(it => it.checked = true);
};