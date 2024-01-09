const { errStr } = require("../error");

const names = {
    name1: 'Erick Moya',
    name2: 'Vianka',
    name3: 'Kimi',
    name4: 'Hiato',
    name5: 'Jonathan MirCha',
};

const isTrueName = (fullName) => {
    if(typeof fullName === 'undefined') return;
    if(typeof fullName !== 'string') return errStr;
    const arrNames = Object.values(names).includes(fullName);
}
// const isTrueName = (fullName) => Object.values(names).includes(fullName);

console.log(isTrueName('Erick Moya'));
console.log(isTrueName('Vianka'));
console.log(isTrueName('JB'));
console.log('');