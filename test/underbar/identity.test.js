const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    expect(_.identity(2)).toBe(2);
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    const arr = [1,2,3];
    expect(_.identity(arr)).toBe(arr);
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    const obj = {
      key1: 'val1',
      key2: 'val2'
    };
    expect(_.identity(obj)).toBe(obj);
  });
});