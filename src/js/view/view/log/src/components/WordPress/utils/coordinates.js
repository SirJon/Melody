export const coordinates = (coordinate) => {
  let elements = document.querySelectorAll(`[data-wpcoordinates]`);
  [...elements].forEach(el => {
    el.setAttribute(`data-wpcoordinates`, coordinate);
  })
};