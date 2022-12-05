export const getJson = (json) => {
  const conteinerObj = {};
  Object.entries(json).forEach(it => {
    const [, obj] = it;
    conteinerObj[obj.title_name.toLowerCase().replace(/\s+/g, '')] = obj;
  });
  return conteinerObj;
};