export const changeEl = (lang) => {
  const imgAll = document.querySelectorAll(`[data-elLanguage]`);
  imgAll.forEach(it => it.style.display = 'none');
  const imgLang = document.querySelectorAll(`[data-elLanguage="${lang}"]`);
  imgLang.forEach(it => it.style.display = 'block');
};