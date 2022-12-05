import { imgRecord } from "../../../fileRecord/imgRecord";

export const changeImg = (jsonContent) => {
  for (let [key, value] of Object.entries(jsonContent)) {
    imgRecord({
      selector: `[data-mashine-img="${key}"]`,
      img: value.mobile,
      picture: [value.desktop, value.table],
    })
  };
};