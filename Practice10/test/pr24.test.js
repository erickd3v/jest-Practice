// Sample Data
const { number, str, arr, obj } = require("../../sampleData");
const numbers = [7, 5, 7, 8, 6];
const result = { asc: [ 5, 6, 7, 7, 8 ], desc: [ 8, 7, 7, 6, 5 ] };
// Error Message
const { errArrayNum } = require("../../validationErrors");
// Function
const asenDesen = require("../pr24");

describe('AsenDesen', () => {
    test('of arrNum', () => {
        expect(asenDesen(numbers)).toStrictEqual(result);
    });
    test('of arr, num, str and obj', () => {
        // Number
        expect(asenDesen(number)).toStrictEqual(errArrayNum);
        // String
        expect(asenDesen(str)).toStrictEqual(errArrayNum);
        // Array
        expect(asenDesen(arr)).toStrictEqual(errArrayNum);
        // Object
        expect(asenDesen(obj)).toStrictEqual(errArrayNum);
    });
    test('of undefined', () => {
        expect(asenDesen()).toBeUndefined();
    });
});