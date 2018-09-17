function random(min, max) {
  if (![min, max].every(x => typeof x === "number")) {
    console.log("Uneti 2 broja !!!");
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function minIntegerFromArray(array) {
  const result = array.filter(x => typeof x === "number");
  return result.length ? Math.min(...result) : false;
}

function minIntegerFromString(string) {
  if (string.length <= 10) {
    console.log("Minimum 10 karaktera !!");
    return;
  }

  const arr = string.match(/\d+/g);
  return arr.length ? Math.min(...arr.map(Number)) : false;
}

function concatStringsByLength(arrayOfStrings, type) {
  const arr = arrayOfStrings.sort(
    (a, b) => (type ? b.length - a.length : a.length - b.length)
  );

  return arr.reduce((acc, x) => acc + x);
}

module.exports = {
  random,
  minIntegerFromArray,
  minIntegerFromString,
  concatStringsByLength
};
