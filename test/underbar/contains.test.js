const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    expect(_.contains(nums, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    expect(_.contains(nums, 4)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    const obj = {
      key1: 'val1', 
      key2: 'val2', 
      key3: 'val3'
    };
    expect(_.contains(obj, 'val1')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    const obj = {
      key1: 'val1', 
      key2: 'val2', 
      key3: 'val3'
    };
    expect(_.contains(obj, 'val4')).toBe(false);
  });

});