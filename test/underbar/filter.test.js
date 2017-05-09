const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    expect(_.filter(nums, item => item % 2 === 1)).toEqual([1, 3]);
  });

  it('filters an object to only numeric values', () => {
    // Your code goes here
    const obj = {
      cost: 11,
      name: "boop",
      number: 12,
      stuff: [1 ,2],
    };
    expect(_.filter(obj, item => !isNaN(item))).toEqual([11, 12]);
  });
});