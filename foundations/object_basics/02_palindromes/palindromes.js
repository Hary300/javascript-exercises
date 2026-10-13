const palindromes = function (word) {
  const alphabeticalNumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const wordWithoutPunctuation = word
    .split('')
    .filter((l) => alphabeticalNumerical.includes(l.toLowerCase()));

  const reversedWord = wordWithoutPunctuation.toReversed().join('');
  console.log(wordWithoutPunctuation.join('').toLowerCase());
  console.log(reversedWord.toLowerCase());
  const isPalindromes =
    wordWithoutPunctuation.join('').toLowerCase() ===
    reversedWord.toLowerCase();

  if (!isPalindromes) {
    return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
