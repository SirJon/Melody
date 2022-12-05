export function imgRecord({ selector, img, picture }) {
  const imgAll = document.querySelectorAll(`${selector}`);
  imgAll.forEach(it => {
    const source = it.querySelectorAll(`source`);

    if (img !== undefined) {
      it.setAttribute("src", img);
    };
    if (picture !== undefined && source !== undefined) {
      it.querySelector(`img`).setAttribute("src", img);
      picture.forEach((it, i) => {
        source[i].setAttribute(`srcset`, it);
      });
    };
  });
};