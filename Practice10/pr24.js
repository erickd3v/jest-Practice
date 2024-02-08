const { errArrayNum } = require("../validationErrors");

const asenDesen = (arrNumber) => {
  if (typeof arrNumber === "undefined") return;
  let asc = [];
  let desc = [];
  if (!Array.isArray(arrNumber)) {
    return errArrayNum;
  } else {
    for (const num of arrNumber) {
      if (typeof num !== "number") return errArrayNum;
      asc = arrNumber.slice().sort();
      desc = arrNumber.slice().sort((a, b) => b - a);
    }
  }

  return { asc, desc };
};

module.exports = asenDesen;
