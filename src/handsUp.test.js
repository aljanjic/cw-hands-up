const handsUp = require('./handsUp');

describe('handsUp', () => {
  it('0 should return [0, 0, 0]', () => {
    expect(handsUp(0)).toStrictEqual([0, 0, 0]);
  });

  it('6 should return [0, 2, 0]', () => {
    expect(handsUp(6)).toStrictEqual([0, 2, 0]);
  });
});
