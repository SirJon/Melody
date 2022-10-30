import assert from 'assert';
import gamePlayerResult from './game-player-result';

describe(`Player result`, () => {

  it(`empty array`, () => {
    const leaderboard = [4, 5, 8, 10, 11, 15];
    const player1Result = {
      points: 9,
      notes: 3,
      time: 30000,
    };
    const player2Result = {
      points: 4,
      notes: 3,
      time: 30000,
    };
    const player3Result = {
      points: 16,
      notes: 3,
      time: 30000,
    };
    const player4Result = {
      points: 1,
      notes: 3,
      time: 30000,
    };
    assert.equal(gamePlayerResult(leaderboard, player1Result), `Вы заняли 4 место из 7 игроков. Это лучше, чем у 43% игроков`);
    assert.equal(gamePlayerResult(leaderboard, player2Result), `Вы заняли 1 место из 7 игроков. Это лучше, чем у 86% игроков`);
    assert.equal(gamePlayerResult(leaderboard, player3Result), `Вы заняли 7 место из 7 игроков. Это лучше, чем у 0% игроков`);
    assert.equal(gamePlayerResult(leaderboard, player4Result), `Вы заняли 1 место из 7 игроков. Это лучше, чем у 86% игроков`);
  });
  
  it(`Null points`, () => {
    const leaderboard = [4, 5, 8, 10, 11, 15];
    const playerResult = {
      points: -1,
      notes: 0,
      time: 30000,
    };
    assert.equal(gamePlayerResult(leaderboard, playerResult), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  
  it(`Null time`, () => {
    const leaderboard = [4, 5, 8, 10, 11, 15];
    const playerResult = {
      points: -1,
      notes: 2,
      time: 0,
    };
    assert.equal(gamePlayerResult(leaderboard, playerResult), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  
  it(`Null all`, () => {
    const leaderboard = [4, 5, 8, 10, 11, 15];
    const playerResult = {
      points: -1,
      notes: 0,
      time: 0,
    };
    assert.equal(gamePlayerResult(leaderboard, playerResult), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
    const playerResult2 = {
      points: 10,
      notes: 0,
      time: 0,
    };
    assert.equal(gamePlayerResult(leaderboard, playerResult2), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});