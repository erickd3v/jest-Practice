const { errNumber } = require("../validationErrors");

const roots = (num) => {
  if (typeof num === "undefined") return;
  if (!Array.isArray(num) && typeof num !== "number") return errNumber;
  if (typeof num === "number") {
    return num ** 2;
  } else {
    const sqrt = num.map((n) => n ** 2);
    if (sqrt.some(isNaN)) {
      return errNumber;
    } else {
      return sqrt;
    }
  }
};

module.exports = roots;
