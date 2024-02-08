const getRandomInt = (min, max) => {
  const number = `${min}, ${max}`;
  min = Math.ceil(min);
  max = Math.floor(max);
  if (typeof number === "undefined") return;
  // let nm;
  // do {
  //     nm = Math.floor(Math.random() * (max - min + 1) + min);
  // } while (nm !== 600) {
  //     return nm;
  // }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
  getRandomInt,
};
