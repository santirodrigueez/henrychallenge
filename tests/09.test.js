const pedirComida = require('../09.js');
  
describe("pedirComida", function () {
  it("should return which meals and how many to order", function () {
    let array = [
      { nombre: "Harry", dieta: "standard" },
      { nombre: "Luna", dieta: "vegan" },
      { nombre: "Goyle", dieta: "standard" },
      { nombre: "Ron", dieta: "standard" },
      { nombre: "Snape", dieta: "vegan" },
    ];
    expect(pedirComida(array)).toEqual({ standard: 3, vegan: 2 });
  });
  it("should return which meals and how many to order", function () {
    let array = [
      { nombre: "Harry", dieta: "standard" },
      { nombre: "Luna", dieta: "vegan" },
      { nombre: "Padma", dieta: "vegan" },
      { nombre: "Ron", dieta: "standard" },
      { nombre: "Snape", dieta: "vegan" },
    ];
    expect(pedirComida(array)).toEqual({ standard: 2, vegan: 3 });
  });
});