export const changeImage = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-wpimg="${key}"]`);
    [...elements].forEach(el => {
      el.setAttribute(`src`, value);
    })
  };
};