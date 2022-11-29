const MAX_TIME = 30000;
export const gamePlayerPointsScored = (arrAnswers, notes) => {
  let scored = 0;
  if (Array.isArray(arrAnswers)) {
    if (Boolean(arrAnswers.length)) {
      if (notes !== 0) {
        arrAnswers.forEach(it => {
          const { result, time } = it;
          result ? (time < MAX_TIME ? scored += 3 : scored++) : scored -= 2;
        });
      } else return -1;
    } else return -406;
  } else return -400;
  return scored;
};