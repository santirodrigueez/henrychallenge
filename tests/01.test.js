const palabrasAFrase = require('../01.js');
  
describe("palabrasAFrase", function () {
  it(`should return a string with the phrase from the array`, function () {
    expect(palabrasAFrase(["You're", "a", "wizard,", "Harry!"])).toEqual(
      "You're a wizard, Harry!"
    );
  });
  it(`should return a string with the phrase from the array `, function () {
    expect(
      palabrasAFrase([
        "I",
        "solemnly",
        "swear",
        "that",
        "I",
        "am",
        "up",
        "to",
        "no",
        "good.",
      ])
    ).toEqual("I solemnly swear that I am up to no good.");
  });
  it(`should return a string with the phrase from the array`, function () {
    expect(
      palabrasAFrase(["After", "all", "this", "time?", "Always"])
    ).toEqual("After all this time? Always");
  });
});