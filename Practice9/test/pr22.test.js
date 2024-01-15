// Sample Data
const { obj, str, arr, number } = require("../../sampleData");
const numbers = [1, 4, 5, 99, -60];
const numberLetter = [1, 4, 's', 99, -60]
// Error Message
const { errArrayNum } = require("../../validationErrors");
// Function
const maxMin = require("../pr22");

describe('maxMin', () => {
    test('of arrNum', () => {
        expect(maxMin(numbers)).toBe('[99, -60]')
    });
    test('of arrNumLetter', () => {
        expect(maxMin(numberLetter)).toStrictEqual(errArrayNum)
    });
    test('of obj, str, num and arrToLetters', () => {
        // Number
        expect(maxMin(number)).toStrictEqual(errArrayNum);
        // String
        expect(maxMin(str)).toStrictEqual(errArrayNum);
        // Arrray
        expect(maxMin(arr)).toStrictEqual(errArrayNum);
        // Object
        expect(maxMin(obj)).toStrictEqual(errArrayNum);
    });
    test('of undefined', () => {
        expect(maxMin()).toBeUndefined();
    });
});