const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.last(arr)).toBe(4);
  });

  it('returns the last 2 elements of an array', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.last(arr, 2)).toEqual([3, 4])
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.last(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});