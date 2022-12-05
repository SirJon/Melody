import { changeTextContent } from "./utils/changeTextContent";
import { changeNode } from "./utils/changeNode";
import { changePlaceholder } from "./utils/changePlaceholder";
export const languageChange = (textContent, lang) => {
  changeTextContent(textContent[lang]);
  changeNode(lang);
  changePlaceholder(textContent[lang]);
};