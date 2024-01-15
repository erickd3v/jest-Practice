const { errArrayNum } = require("../validationErrors");
const numbers = [1, 4, 5, 99, -60];
const maxMin = (arrNum) => {
    if(typeof arrNum === 'undefined') return;
    if(!Array.isArray(arrNum)) return errArrayNum;

    const sortedArr = [...arrNum].sort((a,b) => b - a);
    const result = `[${Math.max(...sortedArr)}, ${Math.min(...sortedArr)}]`;
    if(sortedArr.some(isNaN)) {
        return errArrayNum
    } else {
        return result;
    }
}

module.exports = maxMin

console.log(maxMin(numbers));
// console.log(maxMin(2));
// console.log(maxMin([1, 2, 3, 4, 'd']));
