const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    const people = [
    {name: "matt", age: 20},
    {name: "shrek", age: 42},
    {name: "zanzabar", age: 450}
    ];
    expect(_.pluck(people, 'age')).toEqual([20, 42, 450]);
  });

});