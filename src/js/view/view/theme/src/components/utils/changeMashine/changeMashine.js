import { changeImg } from "./utils/changeImg";
import { changeTextContent } from "./utils/changeTextContent";

export const changeMashine = (data) => {
  changeTextContent(data.content);
  changeImg(data.img);
};