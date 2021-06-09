const chai = require("chai");
const { expect } = chai;

describe(" forEach vjezba", function(){
it("forEach vjezba numbers", function(){
    const field1 = ["10+10", "3+17", "4+16"];
    const field2 = [];
    field1.forEach(function (add) {
      field2.push(add + "=20");
    });
    expect(field2).to.eql([
      "10+10=20",
      "3+17=20",
      "4+16=20",
    ]);
  });

  it("forEach vjezba numbers", function(){
    const field1 = ["red", "white", "blue"];
    const field2 = [];
    field1.forEach(function (add) {
      field2.push(add + " colour");
    });
    expect(field2).to.eql([
      "red colour",
      "white colour",
      "blue colour",
    ]);
  });
});