import { svgRecord } from "../fileRecord/svgRecord";
import { imgRecord } from "../fileRecord/imgRecord";

import banner from "../../assets/img/png/banner/bannerBlack.png";
import bannerHover from "../../assets/img/png/banner/bannerBlackHover.png";

import bannerWhite from "../../assets/img/png/banner/bannerWhite.png";
import bannerHoverWhite from "../../assets/img/png/banner/bannerWhiteHover.png";
import { store } from "../redux/store";
import { r1300, r800 } from "../redux/utils/actions";

const pageCurrent = document.querySelector(`main`).dataset.page;
const R1300 = document.querySelector(`#R1300_footer`);
const R800 = document.querySelector(`#R800_footer`);
R1300.addEventListener(`click`, () => {
  store.dispatch(r1300());
});
R800.addEventListener(`click`, () => {
  store.dispatch(r800());
});

svgRecord({
  selector: `.footer-nav__svg--logo`,
  id: `logo`
});
imgRecord({
  selector: `.footer-nav__img--logo-unhover`,
  img: pageCurrent == `index` ? banner : bannerWhite,
});
imgRecord({
  selector: `.footer-nav__img--logo-hover`,
  img: pageCurrent == `index` ? bannerHover : bannerHoverWhite,
});