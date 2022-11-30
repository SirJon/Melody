export const gamePlayerPointsScored = (arrAnswers, mistakes, MAX_TIME, MAX_MISTAKES) => {
  let scored = 0;
  if (mistakes < MAX_MISTAKES) {
    arrAnswers.forEach(it => {
      const { correctly, time } = it;
      correctly ? (time < MAX_TIME ? scored += 3 : scored++) : scored -= 2;
    });
  } else return -1;
  return scored;
};