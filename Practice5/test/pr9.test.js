const { getRandomInt } = require("../pr9");

describe("getRandomInt", () => {
  test("of numbers", () => {
    const min = 501;
    const max = 600;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
  test("of array", () => {
    const arr = getRandomInt(
      [400, "hola", { id: 32343 }],
      ["gaaa", "jotaro", "dio", 600]
    );
    expect(arr).toBeNaN();
  });
  test("of obj", () => {
    const obj = {
      valor: "a",
      valorb: "b",
    };
    const obj2 = {
      describe: "c",
      describeb: "d",
    };
    expect(getRandomInt(obj, obj2)).toBeNaN();
  });
  test("of undefined", () => {
    expect(getRandomInt()).toBeNaN();
  });
});
