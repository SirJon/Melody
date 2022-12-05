import oil from "../../img/png/product/oil.png";
import spice from "../../img/png/product/spice.png";
export const oilProduct = (obj, language) => {
  const {name = `Материал`, materialShort = `Измельченность`, slides, id} = obj[language];
  return (
    `
  <div class="catalog__product сatalog__product--oil" ${id !== undefined ? `id="${id}"` : ``}>
    <img class="catalog__img" src="${slides[0]}" alt="product">
    <span class="catalog__name">${name}</span>
    <span class="catalog__description">${materialShort}</span>
  </div>
  `)
};
export const spiceProduct = (obj, language) => {
  const {name = `Материал`, materialShort = `Измельченность`, slides, id} = obj[language];
  return (
    `
  <div class="catalog__product сatalog__product--spice" ${id !== undefined ? `id="${id}"` : ``}>
    <img class="catalog__img" src="${slides[0]}" alt="product">
    <span class="catalog__name">${name}</span>
    <span class="catalog__description">${materialShort}</span>
  </div>
  `)
};