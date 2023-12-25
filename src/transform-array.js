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
    let newArray = arr.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === "--discard-next" && i !== newArray.length - 1) {
        newArray.splice(i, 2, "x");
      }
      if (newArray[i] === "--discard-next" && i === newArray.length - 1) {
        newArray.splice(i, 1);
      }
      if (newArray[i] === "--discard-prev" && i !== 0) {
        newArray.splice(i - 1, 2, "x");
      }
      if (newArray[i] === "--discard-prev" && i === 0) {
        newArray.splice(i, 1);
      }
      if (newArray[i] === "--double-next" && i !== newArray.length - 1) {
        newArray.splice(i, 1, newArray[i + 1]);
      }
      if (newArray[i] === "--double-next" && i === newArray.length - 1) {
        newArray.splice(i, 1);
      }
      if (newArray[i] === "--double-prev" && i !== 0) {
        newArray.splice(i, 1, newArray[i - 1]);
      }
      if (newArray[i] === "--double-prev" && i === 0) {
        newArray.splice(i, 1);
      }
    }
    return newArray.filter((element) => element !== "x");
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform,
};
