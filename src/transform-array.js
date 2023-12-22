const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        i + 1;
      }
      if (arr[i] === "--discard-prev") {
        finalArr.pop();
      }
      if (arr[i] === "--double-next") {
        finalArr.push(i + 1);
      }
      if (arr[i] === "--double-prev") {
        finalArr.push(i - 1);
      }
      finalArr.push(i);
    }
    return finalArr;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform,
};
