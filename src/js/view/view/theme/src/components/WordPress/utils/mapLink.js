export const mapLink = (link) => {
  let elements = document.querySelectorAll(`[data-wp-link]`);
  [...elements].forEach(el => {
    el.setAttribute(`href`, link);
  });
};