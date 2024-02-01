// Error messages for validations
const errNumber = new Error(`Error the data type isn't a number`);
const errStr = new Error(`Error the data type isn't a string`);
const errArray = new Error(`Error the data type isn't an array`);
const errObj = new Error(`Error the data type isn't an object`);
const errList = new Error(`Error, the value entered wasn't found in the list`);
const errEmail = new Error(`Error, the text entered isn't an email`);
const errArrayNum = new Error(`Error, the data type isn't an array of numbers`);
const error = new Error(`Error, expected result was: `);
const valueError = new Error(`Error, the value entered doesn't meet the requirements.`);
const undef = `This field can't be empty or undefined`;

module.exports = {
    errNumber,
    errStr,
    errArray,
    errObj,
    errList,
    errEmail,
    errArrayNum,
    error,
    valueError,
    undef
}