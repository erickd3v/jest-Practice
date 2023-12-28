const { capicua, err } = require("../pr10");

describe('capicua', () => {
    test('of one number', () => {
        expect(capicua(2002)).toBe(true);
    });
    test('of two or more numbers', () => {
        const numbers = capicua([100, 2002, 303]);
        expect(numbers).toStrictEqual(err);
    });
    test('of string', () => {
        expect(capicua('hola mundo')).toStrictEqual(err);
    });
    test('of arr or obj', () => {
        const arr = ['hola mundo', 101, {id: `23dse3`}];
        const obj = {
            a : 'sss',
            b: 'ddfdf'
        }
        expect(capicua(arr)).toStrictEqual(err)
        expect(capicua(obj)).toStrictEqual(err)
    });
    test('of undefined', () => {
        expect(capicua()).toBeUndefined()
    });
});