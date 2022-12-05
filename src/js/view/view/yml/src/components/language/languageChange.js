import { changeTextContent } from "./utils/changeTextContent";
import { changePlaceholder } from "./utils/changePlaceholder";
import { changeInputs } from "./utils/changeInputs";
import { changeEl } from "./utils/changeEl";
export const languageChange = (textContent, lang) => {
  changeTextContent(textContent);
  changePlaceholder(textContent);
  changeInputs(lang);
  changeEl(lang);
};