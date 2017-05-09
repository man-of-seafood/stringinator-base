const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    expect(_.map(nums, (x) => Math.pow(x, 2))).toEqual([1, 4, 9]);
  });
});