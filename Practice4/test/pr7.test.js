const { palindrome } = require('../pr7.js');

describe('palindrome', () => {
    test('of salas', () => {
        const result = palindrome('salas');
        expect(result).toBe(true);
    });
    test('of erick', () => {
        expect(palindrome('erick')).toBe(false);
    });
    
    test('of undefined', () => {
    
        expect(palindrome()).toBeUndefined();
    });
});