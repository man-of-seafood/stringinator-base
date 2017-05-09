const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      // Your code goes here
      const nums = [2, 4, 6, 8];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, (item) => item % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const nums = [1, 3, 5, 8]
      expect(_.every(nums, (item) => item % 2 === 1)).toBe(false);
    });

  });
});