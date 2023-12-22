const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArray = [];
  for (let i = 0; i < domains.length; i++) {
    newArray.push(
      domains[i]
        .split(".")
        .reverse()
        .map((element) => `.${element}`)
    );
  }
  let tempArray = [];
  for (let i = 0; i < newArray.length; i++) {
    let temp = "";
    for (let j = 0; j < newArray[i].length; j++) {
      if (j === 0) {
        temp = newArray[i][j];
        tempArray.push(newArray[i][j]);
      } else {
        tempArray.push(temp + newArray[i][j]);
        temp = temp + newArray[i][j];
      }
    }
  }
  let flattenedArray = tempArray.flat();
  let set = new Set(flattenedArray);
  let object = {};
  for (let key of set) {
    object[key] = flattenedArray.filter((element) => element === key).length;
  }

  return object;
}

module.exports = {
  getDNSStats,
};
