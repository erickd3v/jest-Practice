const { errArray } = require("../validationErrors");

// Set
const removeDuplicates = (arr) => {
    if(typeof arr === 'undefined') return;
    if (!Array.isArray(arr)) return errArray;

    const seen = new Set();
    return arr.filter((item) => {
        const key = `${item} - ${typeof item}`;
        if (!seen.has(key)) {
            seen.add(key);
            return true;
        }
    });
};

module.exports = removeDuplicates