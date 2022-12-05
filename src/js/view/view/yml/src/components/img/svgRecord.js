import sprite from "../../img/svg/sprite.svg";

export const svgRecord = ({selector, id}) => {
  const svg = document.querySelectorAll(`${selector} use`);
  svg.forEach(it => {
    it.setAttribute(`xlink:href`, `${sprite}#${id}`);
  });
};