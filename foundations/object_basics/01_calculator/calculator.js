const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.length === 0
    ? 0
    : numbers.reduce((acc, number) => acc + number);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, number) => acc * number);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
