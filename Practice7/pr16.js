const { err } = require("../Practice6/pr13");

const discount = (number, porcent) => {
  const resultF = [];
  if (typeof number === "undefined") return;
  if (typeof number !== "number") return err;
  const resto = number * (porcent / 100);
  const result = number - resto;
  resultF.push(`el ${porcent}% de ${number} es ${result}`);
  return `el ${porcent}% de ${number} es ${result}`;
};

module.exports = discount;
