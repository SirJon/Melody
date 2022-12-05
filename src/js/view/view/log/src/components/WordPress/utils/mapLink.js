export const mapLink = (link) => {
  let elements = document.querySelectorAll(`[data-wplink]`);
  [...elements].forEach(el => {
    el.setAttribute(`href`, link);
  });
};