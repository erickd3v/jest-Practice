const { errArrayNum } = require("../validationErrors");

const average = (arrNum) => {
  if (typeof arrNum === "undefined") return;
  if (!Array.isArray(arrNum)) return errArrayNum;

  const divisor = arrNum.length;

  const isNotNumber = arrNum.some((num) => typeof num !== "number");
  if (isNotNumber) return errArrayNum;

  const sum = arrNum.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  );
  const result = sum / divisor;
  return result;
};

module.exports = average;
