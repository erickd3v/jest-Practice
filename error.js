const errNumber = new Error(`Error el tipo de dato no es un número`);
const errStr = new Error(`Error el tipo de dato no es un string`);
const errArray = new Error(`EError el tipo de dato no es un array`);
const errObj = new Error(`Error el tipo de dato no es un object`);
const error = new Error(`Error, el resultado esperado era: `);

module.exports = {
    errNumber,
    errStr,
    errArray,
    errObj,
    error
}