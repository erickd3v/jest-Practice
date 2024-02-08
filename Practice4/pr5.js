const palindrome = (string) => {
  if (typeof string === "undefined") return;
  if (typeof string === "object")
    return string.toString().split("").reverse().join("");
  return string.split("").reverse().join("");
};

module.exports = {
  palindrome,
};
