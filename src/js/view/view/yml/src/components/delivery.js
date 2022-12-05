import "../styles/sass/style.scss"
import "./parts/header";
import "./parts/footer";
import "./utils/currentItems/currentItems";
import "../components/parts/feedback";

import { imgRecord } from "./img/imgRecord";

import a from "../img/png/delivery/a.png";
import aBig from "../img/png/delivery/aBig.png"
import leafBig from "../img/png/delivery/leafBig.png"
import leafMin from "../img/png/delivery/leafMin.png"

imgRecord({
  selector: `.feedback__picture`,
  img: a,
  picture: [aBig],
});

imgRecord({
  selector: `.delivery__img--leaf`,
  img: leafMin,
  picture: [leafBig],
});