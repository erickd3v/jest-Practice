const { palindrome } = require('../palindrome.js');

describe('palindrome', () => {
    test('of erick', () => {
        const result = palindrome('erick');
        
        expect(result).toBe('kcire');
    });
    
    test('of empty sttring', () =>{
        const result = palindrome('');
    
        expect(result).toBe('');
    });
    
    test('of undefined', () => {
        const result = palindrome();
    
        expect(result).toBeUndefined();
    });
});