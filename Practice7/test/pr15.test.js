const { err } = require("../../Practice6/pr13");
const { change, result } = require("../pr15");

describe("Convert Decimal to Binario and Binario to Decimal", () => {
  test("of a number", () => {
    expect(change(1101, 2)).toBe(result.pop());
  });
  test("od string, arr or obj", () => {
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sss",
      b: "ddfdf",
    };
    // String
    expect(change(str)).toStrictEqual(err);
    // Array
    expect(change(arr)).toStrictEqual(err);
    // Object
    expect(change(obj)).toStrictEqual(err);
  });
  test("of undefined", () => {
    expect(change()).toBeUndefined();
  });
});
