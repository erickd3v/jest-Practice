const { err } = require("../../Practice6/pr13");
const { resultF, discount } = require("../pr16");

describe('Apply discount',() => {
    test('to a number', () => {
        expect(discount(98,20)).toBe(resultF.pop())
    });
    test('to a string, arr or obj', () => {
        const str = 'soy un string';
        const arr = ['hola mundo', 101, {id: `23dse3`}];
        const obj = {
            a : 'sss',
            b: 'ddfdf'
        }
        // String
        expect(discount(str)).toStrictEqual(err);
        // Array
        expect(discount(arr)).toStrictEqual(err);
        // Object
        expect(discount(obj)).toStrictEqual(err);
    });
    test('to a undefined', () => {
        expect(discount()).toBeUndefined()
    });
});