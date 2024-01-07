const { err } = require("../Practice6/pr13");

const calculateDate = (date) => {
    if(typeof date === 'undefined') return;
    if(typeof date !== 'object') return err;
    const newYear = new Date();
    const diffMillis = newYear - date;
    const refAnnio = 1970;
    const resto = new Date(diffMillis).getFullYear() - refAnnio;
    return resto;
}

module.exports = calculateDate;