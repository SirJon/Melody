import assert from 'assert';
import { gamePlayerPointsScored } from "./game-player-points-scored";

describe(`Points scored`, () => {
  it(`Current Result`, () => {
    const resultPlayers = [
      {result: true, time: 30000},
      {result: false, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 40000},
    ];
    const resultPlayers2 = [
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
      {result: true, time: 40000},
    ];
    assert.equal(gamePlayerPointsScored(resultPlayers, 10), 3);
    assert.equal(gamePlayerPointsScored(resultPlayers2, 10), 10);
    assert.equal(gamePlayerPointsScored(resultPlayers2, 5), 10);
  });

  it(`Min notes`, () => {
    const resultPlayers = [
      {result: true, time: 30000},
      {result: false, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 40000},
    ];
    assert.equal(gamePlayerPointsScored(resultPlayers, 0), -1);
  });

  it(`empty array`, () => {
    assert(gamePlayerPointsScored([]), -406);
  });

  it(`Uncurrent`, () => {
    assert.equal(gamePlayerPointsScored({}), -400);
    assert.equal(gamePlayerPointsScored(NaN), -400);
    assert.equal(gamePlayerPointsScored(null), -400);
    assert.equal(gamePlayerPointsScored(undefined), -400);
  });
}); 