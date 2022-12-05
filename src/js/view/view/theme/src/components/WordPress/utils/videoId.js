export const videoId = (options) => {
  const elements = document.querySelectorAll(`[data-wp-video="${options.name}"]`);
  [...elements].forEach(el => {
    el.setAttribute("data-video", options.id);
    el.setAttribute("data-start", options.start);
    el.setAttribute("data-end", options.end);
  })
};