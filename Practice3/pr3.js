const separate = (x, y) => {
  if (typeof x === "undefined") return;
  if (!Array.isArray(x)) return String(x).split(y);
  const result = [];
  x.forEach((item) => {
    if (typeof item === "object" && item !== null) {
      result.push(...separate(Object.values(item), y));
    } else {
      result.push(String(item));
    }
  });
  return result;
};

module.exports = {
  separate,
};
