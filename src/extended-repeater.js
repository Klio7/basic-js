const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let array = [];
  let finalStr = "";

  if (options.hasOwnProperty("repeatTimes")) {
    array = Array.from(Array(options.repeatTimes)).fill(str);
  } else {
    array.fill(str);
  }
  if (options.hasOwnProperty("separator")) {
    finalStr += array.join(options.separator);
  } else {
    finalStr += array.join("+");
  }

  /*let additionalArray = [];
  let additionalStr = "";
  if (options.hasOwnProperty("addition")) {
    additionalStr = options.addition.repeat(additionRepeatTimes);
    if (options.hasOwnProperty("additionSeparator")) {
      additionalStr = additionalStr.split(options.additionSeparator).join("");
    }
  }*/

  return finalStr;
}

module.exports = {
  repeater,
};
