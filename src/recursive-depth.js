const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let newArray = arr.flat(1);
    let countNumber = 1;
    const estimateCurrent = (current) => !Array.isArray(current);
    if (newArray.every(estimateCurrent)) {
      return countNumber;
    } else {
      for (let i = 0; i < newArray.length; i++) {
        if (Array.isArray(newArray[i])) {
          countNumber += this.calculateDepth(newArray[i]);
        }
      }
      return countNumber;
    }
  }
}

module.exports = {
  DepthCalculator,
};
