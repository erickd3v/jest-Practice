const { errArrayNum } = require("../validationErrors");

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