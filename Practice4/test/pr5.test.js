const { palindrome } = require("../pr5.js");

const number = [1, 2, 3, 4];

describe('palindrome', () => {
    test('of Hola Mundo', () => {
        expect(palindrome('Hola Mundo')).toBe('odnuM aloH');
    });
    test('of array of Number', () => {
        expect(palindrome(number)).toBe('4,3,2,1')
    });
    test('of undefined', () => {
        expect(palindrome()).toBeUndefined();
    });
});