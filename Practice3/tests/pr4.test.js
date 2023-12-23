const { repeating } = require("../pr4.js");

const number = [1, 2, 3, 4];

describe('repeating function', () => {
    test('return repeated text', () => {
        expect(repeating('Hola Mundo', 3)).toBe('Hola Mundo Hola Mundo Hola Mundo ')
    });
    test('return repeated array of numbers', () => {
        expect(repeating(`[${number}]`, 2)).toBe('[1,2,3,4] [1,2,3,4] ');
    });
    test('result undefined when called whitoud arguments', () => {
        expect(repeating()).toBeUndefined();
    });
});