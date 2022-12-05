export const videoRecord = ({selector, poster, video}) => {
  const videoTag = document.querySelector(`${selector}`);
  if (poster !== undefined){videoTag.setAttribute(`poster`, `${poster}`)};
  const source = document.querySelector(`${selector} source`);
  if(video !== undefined){source.setAttribute(`src`, `${video}`)};
};

