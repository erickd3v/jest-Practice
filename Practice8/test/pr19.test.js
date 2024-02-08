const { errList } = require("../../validationErrors");
const { isTrueName } = require("../pr19");

describe("Verification Full Name", () => {
  test("of string", () => {
    expect(isTrueName("Erick Moya")).toBe(true);
  });
  test("of number, arr or obj", () => {
    const number = 20;
    const arr = ["hola mundo", 101, { id: "23dse3" }];
    const obj = {
      a: "sd",
      b: "sfdfd",
    };
    // Number
    expect(isTrueName(number)).toStrictEqual(errList);
    // Array
    expect(isTrueName(arr)).toStrictEqual(errList);
    // Object
    expect(isTrueName(obj)).toStrictEqual(errList);
  });
  test("of undefined", () => {
    expect(isTrueName()).toBeUndefined();
  });
});
