const handsUp = require('./handsUp');

describe('handsUp', () => {
  it('0 should return [0, 0, 0]', () => {
    expect(handsUp(0)).toStrictEqual([0, 0, 0]);
  });
});
