const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 4)).toBe(3);
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 5)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    const arr = [1, 2, 2, 4];
    expect(_.indexOf(arr, 2)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 4, 3)).toBe(3);
  });

});