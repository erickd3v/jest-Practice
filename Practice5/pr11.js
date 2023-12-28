const err = new Error(`Error el tipo de dato no es un número`);
const factorial = (number) => {
    if(typeof number === 'undefined') return;
    if(typeof number !== 'number') return err;

    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

module.exports = {
    factorial,
    err
}