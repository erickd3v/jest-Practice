// Error messages for validations
const errNumber = new Error(`Error el tipo de dato no es un número`);
const errStr = new Error(`Error el tipo de dato no es un string`);
const errArray = new Error(`Error el tipo de dato no es un array`);
const errObj = new Error(`Error el tipo de dato no es un object`);
const errList = new Error(`Error, el valor introducido no se encuentra en la lista`);
const errEmail = new Error(`Error el texto ingresado no es un email`);
const errArrayNum = new Error(`Error,el tipo de dato es un array pero no contiene numeros`);
const error = new Error(`Error, el resultado esperado era: `);

module.exports = {
    errNumber,
    errStr,
    errArray,
    errObj,
    errList,
    errEmail,
    errArrayNum,
    error
}