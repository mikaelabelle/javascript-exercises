const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((total, num) => total + num, 0)
};

const multiply = function (array) {
  return array.reduce((total, num) => total * num, 1)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  let array = []
  for (let i = 1; i <= num; i++) {
    array.push(i)
  }
  return array.reduce((total, indiv) => total * indiv, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
