import export31 from "../../img/png/banner/bannerWhite.png";
import export31Hover from "../../img/png/banner/bannerWhiteHover.png";
import { imgRecord } from "../img/imgRecord.js";
import { svgRecord } from "../img/svgRecord.js";
imgRecord({
  selector: `.footer__img--export`,
  img: export31,
});
imgRecord({
  selector: `.footer__img--hover`,
  img: export31Hover,
});
svgRecord({
  selector: `.footer__svg--logo`,
  id: `logo`,
});