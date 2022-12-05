export const changeTextContent = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-mashine-content="${key}"]`);
    [...elements].forEach(el => {
      el.innerHTML = value;
    })
  };
};