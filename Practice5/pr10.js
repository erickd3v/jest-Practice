const err = new Error(`Error el tipo de dato no es un número`);

const capicua = (number) => {
    if(typeof number === 'undefined') return;
    const newNumber = number.toString().split('').reverse().join('');
    const newNumberChange = Number(newNumber);
    return typeof number !== 'number' ? err : newNumberChange !== number ? false : true
}

module.exports = {
    capicua,
    err
}