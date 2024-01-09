const { errStr } = require("../error");

const countVowelsAndConsonants = (string) => {
    if(typeof string === 'undefined') return;
    if(typeof string !== 'string') return errStr;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const regex = /[^a-zA-Z]/;
    const lowercaseString = string.toLowerCase();
    const vowelArray = Array.from(lowercaseString).filter((char) => vowels.includes(char));
    const consonantArray = Array.from(lowercaseString).filter((char) => !regex.test(char) && !vowels.includes(char));
    return `
Vowels: ${vowelArray.length}
Consonants: ${consonantArray.length}
`;
}
module.exports = countVowelsAndConsonants;