// errorMessage
const { errStr } = require("../../validationErrors");
// dataValidations
const { number, arr, obj } = require("../../sampleData");
// function
const isEmail = require("../pr20");

describe('validationEmail', () => {
    test('of string', () => {
        expect(isEmail('jonmircha@gmail.com')).toBe(true);
    });
    test('of number, arr, obj', () => {
        // Number
        expect(isEmail(number)).toStrictEqual(errStr);
        // Array
        expect(isEmail(arr)).toStrictEqual(errStr);
        // Object
        expect(isEmail(obj)).toStrictEqual(errStr);
    });
    test('of undefined', () => {
        expect(isEmail()).toBeUndefined();
    });
});