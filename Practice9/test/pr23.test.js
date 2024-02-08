// Sample Data
const { str, arr, obj } = require("../../sampleData");
// Error Message
const { errNumber } = require("../../validationErrors");
// Function
const parImpar2 = require("../pr23");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = { impar: [1, 3, 5, 7, 9], par: [0, 2, 4, 6, 8, 10] };

describe("ParImpar2", () => {
  test("of a number", () => {
    expect(parImpar2(1)).toBe("Impar");
  });
  test("of array of number", () => {
    expect(parImpar2(numbers)).toStrictEqual(result);
  });
  test("of string, arr or obj", () => {
    // String
    expect(parImpar2(str)).toStrictEqual(errNumber);
    // Array
    expect(parImpar2(arr)).toStrictEqual(errNumber);
    // Object
    expect(parImpar2(obj)).toStrictEqual(errNumber);
  });
  test("of undefined", () => {
    expect(parImpar2()).toBeUndefined();
  });
});
