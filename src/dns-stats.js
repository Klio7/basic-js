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
    newArray.push(domains[i].split(".").reverse());
  }
  let myMap = new Map();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      let key = newArray[i][j];
      let value = myMap.get(key);
      if (myMap.has(key)) {
        value += 1;
      }
      myMap.set(key, value);
    }
  }

  return myMap;
}

module.exports = {
  getDNSStats,
};
