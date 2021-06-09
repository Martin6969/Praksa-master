const chai = require("chai");
const { expect } = chai;

describe("Reduce zadaci", function () {
  it("reduce test addition", function () {
    let addition2 = [20, 17, 13, 50, 25].reduce((value, curr) => value + curr);
    expect(addition2).to.eql(125);
  });
  it("reduce test subtraction", function () {
    let subtraction2 = [100, 80, 50, 10].reduce((value, curr) => value - curr);
    expect(subtraction2).to.eql(-40);
  });
  it("reduce test multiplication", function () {
    let multiplication2 = [2, 3, 10, 15].reduce((value, curr) => value * curr);
    expect(multiplication2).to.eql(900);
  });
  it("reduce test division", function () {
    let division2 = [500, 2, 10, 5].reduce((value, curr) => value / curr);
    expect(division2).to.eql(5);
  });
});