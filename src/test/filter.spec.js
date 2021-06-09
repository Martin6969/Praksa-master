const chai = require("chai");
const { expect } = chai;

describe("Filter zadaci", function () {
  it("should return numbers divisible by 10", function () {
        function divisiblebyten(value) {
          return value % 10 == 0;
        }
        var brojevi= [100, 90, 80, 66, 52, 40, 30, 21].filter(divisiblebyten);
        expect(brojevi).to.eql([100, 90, 80, 40,30]);
      });

  it("should return words with more then 4 letters", function () {
    let words = [
    "skola",
    "drzava",
    "automobil",
    "sat",
    ];
    const result = words.filter((word) => word.length > 4);
    expect(result).to.eql(["skola", "drzava", "automobil"]);
  });

  it("should return words with less then 4 letters", function () {
    let words = [
        "skola",
        "drzava",
        "automobil",
        "sat",,
    ];
    const result = words.filter((word) => word.length < 4);
    expect(result).to.eql(["sat"]);
  });
});