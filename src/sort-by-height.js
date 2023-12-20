const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indecies = [];
  let heights = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indecies.push(i);
    } else [heights.push(arr[i])];
  }
  let sortedHeights = heights.sort((a, b) => a - b);
  for (let i = 0; i < indecies.length; i++) {
    sortedHeights.splice(indecies[i], 0, -1);
  }
  return sortedHeights;
}

module.exports = {
  sortByHeight,
};
