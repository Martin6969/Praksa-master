function addition() {
    var fieldNumbers = [15, 35, 45, 60];
    return fieldNumbers.map((Number) => {
      return Number + 15;
    });
  }
  
  function subtraction() {
    var fieldNumbers = [15, 30, 45, 60];
    return fieldNumbers.map((Number) => {
      return Number - 15;
    });
  }
  function multiplication() {
    const field1 = [40, 60, 80, 100];
    const field2 = field1.map((value) => {
      return value * 2;
    });
    return field2;
  }
  
  function division() {
    var fieldNumbers = [10, 20, 30, 40];
    return fieldNumbers.map((Number) => {
      return Number / 10;
    });
  }
  module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
  };