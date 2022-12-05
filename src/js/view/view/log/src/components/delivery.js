import "../styles/scss/style.scss";

import "./parts/header.js";
import "./parts/footer.js";
import "./currentItems/currentItems";
import { imgRecord } from "./img/imgRecord";

import deliveryPhoto from "../img/webp/delivery/delivery.webp";


imgRecord({
  selector: `.delivery__img`,
  img: deliveryPhoto,
});