const { obj, str, arr } = require("../../sampleData");
const { errNumber } = require("../../validationErrors");
const roots = require("../pr21");
const numbers = [1, 4, 5];
const numberLetter = [1, 4, 'd'];
describe('roots', () => {
    test('of arrNum', () => {
        expect(roots(numbers)).toStrictEqual([1, 16, 25]);
    });
    test('of number', () => {
        expect(roots(2)).toBe(4);
    });
    test('of arrNumLetter', () => {
        expect(roots(numberLetter)).toStrictEqual(errNumber);
    });
    test('of obj, str and arrToLetters', () => {
        // String
        expect(roots(str)).toStrictEqual(errNumber);
        // Array
        expect(roots(arr)).toStrictEqual(errNumber);
        // Object
        expect(roots(obj)).toStrictEqual(errNumber);
    });
    test('of undefined', () => {
        expect(roots()).toBeUndefined();
    });
});