const { slices } = require('../pr2');

describe('slices function', () => {
    test('return a slice of string', () => {
        expect(slices('Hola Mundo', 0, 4)).toBe('Hola');
    });

    test('result undefined when called whitoud arguments', () => {
        expect(slices()).toBeUndefined();
    });
});