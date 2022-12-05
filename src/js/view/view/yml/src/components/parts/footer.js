import { svgRecord } from "../img/svgRecord";
import { imgRecord } from "../img/imgRecord";
import bannerWhite from "../../img/png/banner/bannerWhite.png";
import bannerHover from "../../img/png/banner/bannerWhiteHover.png";
import { popup as popupParnter } from "../parts/popupPartner";

const partnerButton = document.querySelector(`.footer__button--partner`);

const onClickButtonOpen = (e) => {
  e.preventDefault();
  popupParnter.open();
};
partnerButton.addEventListener(`click`, onClickButtonOpen);
svgRecord({
  selector: `.footer__svg--logo`,
  id: `miniLogo`
});
imgRecord({
  selector: `.footer__img--unactiv`,
  img: bannerWhite,
});
imgRecord({
  selector: `.footer__img--activ`,
  img: bannerHover,
});