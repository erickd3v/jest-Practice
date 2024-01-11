const { errStr } = require("../validationErrors");

const email = ['@gmail.com', '@hotmail.com', '@outlook.com'];

const isEmail = (text) => {
    if(typeof text === 'undefined') return;
    if(typeof text !== 'string') return errStr;
    return email.some(e => text.endsWith(e));
}

module.exports = isEmail

console.log(isEmail('erick@outlook.com'));
console.log(isEmail(2));
console.log(isEmail());