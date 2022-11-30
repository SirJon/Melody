export default function gamePlayerResult(resultOtherPlayers, resultPlayer) {
  // if (resultPlayer.notes == 0) {
  //   return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  // }
  // if (resultPlayer.time <= 0) {
  //   return `Время вышло! Вы не успели отгадать все мелодии`;
  // }
  const playersStats = resultOtherPlayers.slice();
  playersStats.push(resultPlayer.score);
  playersStats.sort((a, b) => a - b);
  const players = playersStats.length;
  const place = playersStats.findIndex(it => it === resultPlayer.score) + 1;
  const resultPercentage = Math.round((place - 1) / players * 100);
  return `Вы заняли ${players - place + 1} место из ${players} игроков. Это лучше, чем у ${resultPercentage}% игроков`;
};