const func = require("./functions");

module.exports = {
  random: func.random(1, 10),
  minIntegerFromArray: func.minIntegerFromArray([1, "etf", "kgj", 4, 0, 2]),
  minIntegerFromString: func.minIntegerFromString(
    "Danas, 17.21tog Septembra, u 20h, 16og Septembra"
  ),
  concatStringsByLength: func.concatStringsByLength(
    ["abc", "ac", "bdca", "edagas"],
    1
  )
};
