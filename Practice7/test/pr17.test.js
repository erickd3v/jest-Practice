const { err } = require("../../Practice6/pr13");
const calculateDate = require("../pr17");

describe("Get Year", () => {
  test("to a obj", () => {
    expect(calculateDate(new Date(1984, 4, 23))).toBe(39);
  });
  test("to number, arr or string", () => {
    const number = 20;
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    // Number
    expect(calculateDate(number)).toStrictEqual(err);
    // String
    expect(calculateDate(str)).toStrictEqual(err);
    // Array
    expect(calculateDate(arr)).toStrictEqual(NaN);
  });
  test("to a undefined", () => {
    expect(calculateDate()).toBeUndefined();
  });
});
