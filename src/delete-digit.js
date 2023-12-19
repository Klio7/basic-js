const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let initialNumberArray = String(n).split("");
  let numbersArray = [];
  for (let i = 0; i < initialNumberArray.length; i++) {
    initialNumberArray.splice(i, 1);
    numbersArray.push(initialNumberArray.join(""));
    initialNumberArray = String(n).split("");
  }

  return Math.max(...numbersArray);
}

module.exports = {
  deleteDigit,
};
