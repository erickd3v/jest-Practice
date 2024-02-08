const { factorial, err } = require("../pr11");

describe("factorial", () => {
  test("of number", () => {
    expect(factorial(5)).toBe(120);
  });
  test("of two or more numbers", () => {
    const numbers = factorial([5, 6, 7, 8]);
    expect(numbers).toBe(err);
  });
  test("of string, arr or obj", () => {
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sss",
      b: "ddfdf",
    };
    // String
    expect(factorial(str)).toStrictEqual(err);
    // Array
    expect(factorial(arr)).toStrictEqual(err);
    // Object
    expect(factorial(obj)).toStrictEqual(err);
  });
  test("of undefined", () => {
    expect(factorial()).toBeUndefined();
  });
});
