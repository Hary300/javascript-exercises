const fibonacci = function (sequence) {
  if (isNaN(Number(sequence)) || sequence <= 0) {
    return 'OOPS';
  }

  let fibonacciNumbers = [];
  for (let i = 1; i <= sequence; i++) {
    if (i === 1 || i === 2) {
      fibonacciNumbers.push(1);
    } else {
      const preNumber1 = fibonacciNumbers[fibonacciNumbers.length - 2];
      const preNumber2 = fibonacciNumbers[fibonacciNumbers.length - 1];
      fibonacciNumbers.push(preNumber1 + preNumber2);
    }
  }
  return fibonacciNumbers[sequence - 1];
};

// Do not edit below this line
module.exports = fibonacci;
