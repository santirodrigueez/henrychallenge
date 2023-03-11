const doble = require('../04.js');
  

describe("doble", function () {
  it("should return an array with the doble of each number of the given array", function () {
    let array = [3, 1, 2, 10];
    expect(doble(array)).toEqual([6, 2, 4, 20]);
  });
  it("should return an array with the doble of each number of the given array", function () {
    let array = [21, 3, 12, 7, 20];
    expect(doble(array)).toEqual([42, 6, 24, 14, 40]);
  });
  it("should return an array with the doble of each number of the given array", function () {
    let array = [6, 11, 22, 7, 15];
    expect(doble(array)).toEqual([12, 22, 44, 14, 30]);
  });
});