export const changePlaceholder = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let inputs = document.querySelectorAll(`[data-placeholderLanguage="${key}"]`);
    [...inputs].forEach(it => {
      it.placeholder = value;
    })
  };
};