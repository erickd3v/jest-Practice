const { esPrimo, arrN } = require("../pr12");
const { err } = require("../pr13");

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100,
];

describe("Verification `esPrimo`", () => {
  test("of a number", () => {
    expect(esPrimo(1)).toBe(false);
  });
  test("of array of numbers", () => {
    numbers.forEach((e) => {
      esPrimo(e);
    });
    expect(arrN).toBe(arrN);
  });
  test("of string, arr or obj", () => {
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sss",
      b: "ddfdf",
    };
    // String
    expect(esPrimo(str)).toStrictEqual(err);
    // Array
    expect(esPrimo(arr)).toStrictEqual(err);
    // Object
    expect(esPrimo(obj)).toStrictEqual(err);
  });
  test("of undefined", () => {
    expect(esPrimo()).toBeUndefined();
  });
});
