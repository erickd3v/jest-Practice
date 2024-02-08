const position = (string, x) => {
  if (typeof string === "undefined") return;
  if (typeof string === "object")
    return string.toString().split(",").indexOf(x) + 1;
  const newString = string.split(" ");
  return newString.indexOf(x) + 1;
};

module.exports = {
  position,
};
