const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(date);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  let newDate = new Date(
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );

  return newDate;

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  ) {
    let month = date.getMonth();

    return ["winter", "spring", "summer", "autumn"][
      Math.floor(((month + 1) % 12) / 3)
    ];
  }
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};
