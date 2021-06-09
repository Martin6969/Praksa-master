const chai = require("chai");
const { expect } = chai;
const {
  addition,
  subtraction,
  multiplication,
  division,
} = require("../map.js");

describe("Map zadaci", function () {
  it("should return numbers added to 15", function () {
    expect(addition()).to.eql([30, 50, 60, 75]);
  });
  it("should return numbers subtracted from 15", function () {
    expect(subtraction()).to.eql([0, 15, 30, 45]);
  });
  it("should return multiplied numbers", function () {
    expect(multiplication()).to.eql([80, 120, 160, 200]);
  });
  it("should return numbers divided by 10", function () {
    expect(division()).to.eql([1, 2, 3, 4]);
  });
  });