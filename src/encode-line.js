const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let replacer = (x) => `${x.length}${x[0]}`;
  return str.replace(/(.)\1+/gi, replacer);
}

module.exports = {
  encodeLine,
};
