const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.reduce(nums, (accumulator, currentValue) => accumulator + currentValue), 0).toBe(10);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.reduce(nums, (accumulator, currentValue) => accumulator + currentValue)).toBe(10);
  });

});