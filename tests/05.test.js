const loboEstaONoEsta = require('../05.js');
  
describe("loboEstaONoEsta", function () {
  it("should return true or false depending on the condition", function () {
    expect(loboEstaONoEsta(["hola", 7, 22, "frase", "nada"])).toEqual(false);
  });
  it("should return true or false depending on the condition", function () {
    expect(
      loboEstaONoEsta(["buena", "short", 11, 6, "words", "lobo"])
    ).toEqual(true);
  });
});