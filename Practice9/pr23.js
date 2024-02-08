const { errNumber } = require("../validationErrors");

const parImpar2 = (number) => {
  if (typeof number === "undefined") return;

  const par = [];
  const impar = [];

  if (!Array.isArray(number)) {
    if (typeof number === "number") {
      return number % 2 === 0 ? "Par" : "Impar";
    } else {
      return errNumber;
    }
  }
  for (const num of number) {
    if (typeof num !== "number") return errNumber;
    num % 2 === 0 ? par.push(num) : impar.push(num);
  }
  return { par, impar };
};

module.exports = parImpar2;
