const fakeBinary2 = require('../03.js');
  
describe("fakeBinary2", function () {
  it("should return a string with 1s and 0s acording the numbers inside the given string", function () {
    expect(fakeBinary2("934")).toEqual("100");
  });
  it("should return a string with 1s and 0s acording the numbers inside the given string", function () {
    expect(fakeBinary2("178452")).toEqual("011010");
  });
});