const { palindrome } = require('../palindrome');

describe('palindrome', () => {
    test('of erick', () => {
        const result = palindrome('erick');
        
        expect(result).toBe('kcire');
    });
    
    test('of empty string', () =>{
        const result = palindrome('');
    
        expect(result).toBe('');
    });
    
    test('of undefined', () => {
        const result = palindrome();
    
        expect(result).toBeUndefined();
    });
});