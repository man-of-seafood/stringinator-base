const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    expect(_.isArrayLike(nums)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    const arrLikeObj = {
      length: 2,
      key1: 'val1',
      key2: 'val2'
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    const nonArrLikeObj = {
      key1: 'val1', 
      key2: 'val2'
    };
    expect(_.isArrayLike(nonArrLikeObj)).toBe(false);
  });
});
