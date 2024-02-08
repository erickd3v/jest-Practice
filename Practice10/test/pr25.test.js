// Sample Data
const { number, str, obj } = require("../../sampleData");
const array = ["x", 10, "x", 2, "10", 10, true, true];
const result = ["x", 10, 2, "10", true];
// Error Message
const { errArray } = require("../../validationErrors");
// Function
const removeDuplicates = require("../pr25");

describe("remove duplicates", () => {
  test("of array", () => {
    expect(removeDuplicates(array)).toStrictEqual(result);
  });
  test("of str, num, obj", () => {
    // Number
    expect(removeDuplicates(number)).toStrictEqual(errArray);
    // String
    expect(removeDuplicates(str)).toStrictEqual(errArray);
    // Object
    expect(removeDuplicates(obj)).toStrictEqual(errArray);
  });
  test("of undefined", () => {
    expect(removeDuplicates()).toBeUndefined();
  });
});
