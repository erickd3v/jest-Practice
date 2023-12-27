const { position } = require("../pr6");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('return the position', () => {
    test('of string', () => {
        expect(position('Hola mundo adios mundo', 'mundo')).toBe(2);
    });
    test('of array of numbers', () => {
        expect(position(numbers, '5')).toBe(5)
    });
    test('of undefined', () => {
        expect(position()).toBeUndefined();
    });
});