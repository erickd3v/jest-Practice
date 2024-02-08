const { parImpar, par, impar, err } = require("../pr13");

describe("ParImpar", () => {
  test("of a number", () => {
    expect(parImpar(1)).toBe("Impar");
  });
  test("of array of number", () => {
    const numbers = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    numbers.forEach((e) => {
      parImpar(e);
    });
    const result = `Par: [${par}] \nImpar: [${impar}]`;

    expect(result).toBe(result);
  });
  test("of string, arr or obj", () => {
    const str = "soy un string";
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sss",
      b: "ddfdf",
    };
    // String
    expect(parImpar(str)).toStrictEqual(err);
    // Array
    expect(parImpar(arr)).toStrictEqual(err);
    // Object
    expect(parImpar(obj)).toStrictEqual(err);
  });
  test("of undefined", () => {
    expect(parImpar()).toBeUndefined();
  });
});
