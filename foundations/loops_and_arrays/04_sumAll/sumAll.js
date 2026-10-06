const sumAll = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    num1 < 0 ||
    num2 < 0 ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0
  )
    return 'ERROR';

  const min = num1 < num2 ? num1 : num2;
  const max = num1 > num2 ? num1 : num2;
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
