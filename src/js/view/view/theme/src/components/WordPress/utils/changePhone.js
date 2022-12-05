export const changePhone = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    let elements = document.querySelectorAll(`[data-wp-phone="${key}"]`);
    [...elements].forEach(el => {
      el.innerHTML = value;
      el.href = `tel:${value.replace(/[^0-9+]/g, '')}`;
    })
  };
};