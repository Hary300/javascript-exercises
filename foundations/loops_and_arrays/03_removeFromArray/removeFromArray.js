const removeFromArray = function (array, ...params) {
  return array.filter((item) => !params.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
