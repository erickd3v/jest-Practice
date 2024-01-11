const { errList } = require("../validationErrors");

const names = {
    name1: 'Erick Moya',
    name2: 'Vianka',
    name3: 'Kimi',
    name4: 'Hiato',
    name5: 'Jonathan MirCha',
};

const isTrueName = (fullName) => {
    if(typeof fullName === 'undefined') return;
    if(typeof fullName !== 'string') return errList;
    const arrNames = Object.values(names).includes(fullName);
    return arrNames
}

module.exports = {
    isTrueName
}