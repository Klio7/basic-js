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
      switch (newArray[i]) {
        case "--discard-next":
          if (i === newArray.length - 1) {
            newArray.splice(i, 1);
            continue;
          }
          newArray.splice(i, 2, "x");
          break;
        case "--discard-prev":
          if (i === 0) {
            newArray.splice(i, 1);
            continue;
          }
          newArray.splice(i - 1, 2, "x");
          break;
        case "--double-next":
          if (i === newArray.length - 1) {
            newArray.splice(i, 1);
            continue;
          }
          newArray.splice(i, 1, newArray[i + 1]);
          break;
        case "--double-prev":
          if (i === 0) {
            newArray.splice(i, 1);
            continue;
          }
          newArray.splice(i, 1, newArray[i - 1]);
          break;
      }
    }
    return newArray.filter((element) => element !== "x");
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform,
};
