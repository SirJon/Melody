export const changeTextContent = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-lang="${key}"]`);
    [...elements].forEach(el => {
      el.innerHTML = value;
    })
  };
};