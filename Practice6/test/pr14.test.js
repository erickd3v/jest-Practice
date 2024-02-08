const { err } = require("../pr13");
const { degrees, resultF } = require("../pr14");

describe("Converter °C to °F and °F to °C", () => {
  test("of a number", () => {
    expect(degrees(29, "F")).toBe(resultF.toString());
  });
  test("of string, arr or obj", () => {
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sss",
      b: "ddfdf",
    };
    // String
    expect(degrees(str)).toStrictEqual(err);
    // Array
    expect(degrees(arr)).toStrictEqual(err);
    // Object
    expect(degrees(obj)).toStrictEqual(err);
  });
  test("of undefined", () => {
    expect(degrees()).toBeUndefined();
  });
});
