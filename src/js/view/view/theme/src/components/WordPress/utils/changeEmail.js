export const changeEmail = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-wp-email="${key}"]`);
    [...elements].forEach(el => {
      el.innerHTML = value;
      el.href = `mailto:${value}`;
    })
  };
};