export function imgRecord({ selector, img, picture }) {
  const imgAll = document.querySelectorAll(`${selector}`);
  imgAll.forEach(it => {
    const source = it.querySelectorAll(`source`);

    if (picture !== undefined && source !== undefined && img !== undefined) {
      it.querySelector(`img`).setAttribute("src", img);
      source.forEach((it, i) => {
        it.setAttribute(`srcset`, picture[i]);
      });
    } else {
      if (img !== undefined) {
        it.setAttribute("src", img);
      };
    };
  });
};