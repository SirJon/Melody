export const changePlaceholder = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-placeholder="${key}"]`);
    [...elements].forEach(el => {
      el.placeholder = value;
    })
  };
}