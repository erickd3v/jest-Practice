const { separate } = require("../pr3");

const numbers = [1, 2, 3, 4, 5, 6];
const obj = [
  {
    number: "1",
    text: "Hola mundo",
    a: "a",
    b: "b",
    c: "c",
  },
];

describe("separate function", () => {
  test("return text of string", () => {
    expect(separate("Hola que tal", " ")).toEqual(["Hola", "que", "tal"]);
  });
  test("return text of array of numbers", () => {
    expect(separate(numbers, " ")).toEqual(["1", "2", "3", "4", "5", "6"]);
  });
  test("return text of array of object", () => {
    expect(separate(obj, "")).toEqual(["1", "Hola mundo", "a", "b", "c"]);
  });
  test("result undefined when called whitoud arguments", () => {
    expect(separate()).toBeUndefined();
  });
});
