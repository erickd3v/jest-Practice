// Sample Data
const { str, arr, obj } = require("../../sampleData");
const arrNumbers = [9,8,7,6,5,4,3,2,1,0];
const result = 4.5;
// Error Message
const { errArrayNum } = require("../../validationErrors");
// Function
const average = require("../pr26");

describe('Average', () => {
    test('of arrNumber', () => {
        expect(average(arrNumbers)).toBe(result);
    });
    test('of str, arr, obj', () => {
        // String
        expect(average(str)).toStrictEqual(errArrayNum);
        // Array
        expect(average(arr)).toStrictEqual(errArrayNum);
        // Object
        expect(average(obj)).toStrictEqual(errArrayNum);
    });
    test('of undefined', () => {
        expect(average()).toBeUndefined();
    });
});