const { err } = require("./pr13");

const primo = [];
const noPrimo = [];

const esPrimo = (number) => {
  /** Primera solución */
  if (typeof number === "undefined") return;
  if (typeof number !== "number") return err;
  const verficication =
    (number % 2 !== 0 &&
      number % 3 !== 0 &&
      number % 5 !== 0 &&
      number % 7 !== 0) ||
    number === 2 ||
    number === 3 ||
    number === 5 ||
    number === 7;
  if (number === 0 || number === 1) {
    noPrimo.push(number);
    return false;
  } else if (verficication) {
    primo.push(number);
    return true;
  } else {
    noPrimo.push(number);
    return false;
  }

  // return (verficication) ? 'Es primo' : 'No es primo';
};

const arrN = [];

module.exports = { esPrimo, arrN };
