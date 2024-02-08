const { errStr } = require("../../validationErrors");
const countVowelsAndConsonants = require("../pr18");
const result = `
Vowels: 4
Consonants: 5
`;
describe("count Vowels and Consonants", () => {
  test("of string", () => {
    expect(countVowelsAndConsonants("Hola Mundo")).toBe(result);
  });
  test("of number, arr or obj", () => {
    const number = 20;
    const arr = ["hola mundo", 101, { id: `23dse3` }];
    const obj = {
      a: "sd",
      b: "sfdfd",
    };
    // Number
    expect(countVowelsAndConsonants(number)).toStrictEqual(errStr);
    // Array
    expect(countVowelsAndConsonants(arr)).toStrictEqual(errStr);
    // Object
    expect(countVowelsAndConsonants(obj)).toStrictEqual(errStr);
  });
  test("of undefined", () => {
    expect(countVowelsAndConsonants()).toBeUndefined();
  });
});
