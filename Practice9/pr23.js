const { errNumber } = require('../validationErrors')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const parImpar2 = (number) => {
    if(typeof number === 'undefined') return;

    const par = [];
    const impar = [];
    
    if(!Array.isArray(number)) {
        if (typeof number === 'number') {
            return number % 2 === 0 ? 'Par' : 'Impar';
        } else {
            return errNumber;
        }
    }
    for (const num of number) {
        if(typeof num !== 'number') return errNumber;
        num % 2 === 0 ? par.push(num) : impar.push(num);
    }
    return {par, impar};
}


console.log(parImpar2(numbers));

module.exports = parImpar2