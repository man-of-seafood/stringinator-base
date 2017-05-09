const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    const nums = [1, 3, 5, 6];
    expect(_.reject(nums, item => item % 2 === 1)).toEqual([6]);
  });

  it('rejects null values from an object', () => {
    // Your code goes here
    const obj = {
      key1: null, 
      key2: null, 
      key3: 'val3'
    };
    expect(_.reject(obj, value => value === null)).toEqual(['val3']);
  });
});