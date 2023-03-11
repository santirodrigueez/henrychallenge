const cuantosMenores = require('../02.js');
let invitados = {
  Luna: {
    edad: 3,
  },
  Sebas: {
    edad: 13,
  },
  Marce: {
    edad: 23,
  },
  Nicky: {
    edad: 31,
  },
};

let invitados2 = {
  Luna: {
    edad: 3,
  },
  Sebas: {
    edad: 13,
  },
  Marce: {
    edad: 23,
  },
  Nicky: {
    edad: 8,
  },
};
describe("cuantosMenores", function () {
  it("should return the amount of underage guests", function () {
    expect(cuantosMenores(invitados)).toBe(2);
  });
  it("should return the amount of underage guests", function () {
    expect(cuantosMenores(invitados2)).toBe(3);
  });
});