const { value } = require('../pr1');

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const obj = [
    {llave: 'valor'},
    {a: 'c'},
    {x: 3}
];

describe('value function', () => {
    test('return a length of string', () => {
        expect(value('Hola Mundo')).toBe(10);
    });
    test('return a length of array of numbers', () => {
        expect(value(number)).toBe(9);
    });
    test('return a length of array of objects', () => {
        expect(value(obj)).toBe(3);
    });
    test('result undefined when called whitoud arguments', () => {
        expect(value()).toBeUndefined();
    });
});