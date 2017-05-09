const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const nums = [1, 2, 3];
    const compareArr = [];
    let count = 0;
    _.each(nums, function(item, index, iteratedObj) {
      expect(iteratedObj[index]).toBe(item);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arrLikeObj = {
      length: 2,
      key1: 'val1',
      key2: 'val2'
    };
    let count = 0;
    _.each(arrLikeObj, function(item, key, iteratedObj) {
      expect(iteratedObj[key]).toBe(item);
      count++;
    });
    expect(count).toBe(2);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const nonArrLikeObj = {
      fries: "Yes", 
      hotdogs: "definitely",
    };
    let count = 0;
    _.each(nonArrLikeObj, function(item, key, iteratedObj) {
      expect(iteratedObj[key]).toBe(item);
      count++;
    });
    expect(count).toBe(2);
  });
});

