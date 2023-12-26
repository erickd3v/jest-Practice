const { deleting } = require("../pr8");

const err = new Error('string.split is not a function');

describe('deleting string', () => {
    test('of "xyz"', () => {
        const str1 = deleting("xyz1, xyz2, xyz3, xyz4 y xyz5", 'xyz')
        const result = "1, 2, 3, 4 y 5"
        expect(str1).toBe(result);
    });
    test('of array', () => {
        const arr = () => {
            deleting(["hola", "soy", "un", "troll"], "sdsdsd");
        }
        expect(arr).toThrow(err)
    });
    test('of object', () => {
        const obj = () => {
            deleting({
                hola: 'xd',
                bye: 'adio',
                chpeting: 'gaaaaa'
            }, obj.hola)
        }
        expect(obj).toThrow(err)
    });

    test('of undefined', () => {
        expect(deleting()).toBeUndefined()
    });
});