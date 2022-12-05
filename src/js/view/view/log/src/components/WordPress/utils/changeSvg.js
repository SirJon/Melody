export const changeSvg = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-wpsvg="${key}"] use`);
    [...elements].forEach(el => {
      el.setAttribute(`xlink:href`, value);
    })
  };
};