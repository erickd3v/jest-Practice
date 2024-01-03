const { err } = require("./pr13");
const resultF = [];
const degrees = (number, symbol) => {
    if(typeof number === 'undefined') return;
    
    if(typeof number !== 'number') return err

    const result = `${number}°${symbol} is equal to`;

    if (symbol === 'C') {
        const farenheit = number * 1.8 + 32;
        const rounded = parseFloat(farenheit.toFixed(2));
        resultF.push(rounded === farenheit ? `${result} ${rounded}°F` : `${result} ${farenheit.toFixed(2)}°F`);
        return rounded === farenheit ? `${result} ${rounded}°F` : `${result} ${farenheit.toFixed(2)}°F`
    } else if(symbol === 'F') {
        const celsius = (number - 32) / 1.8;
        const rounded = parseFloat(celsius.toFixed(2));
        resultF.push(rounded === celsius ? `${result} ${rounded}°C` : `${result} ${celsius.toFixed(2)}°C`);
        return rounded === celsius ? `${result} ${rounded}°C` : `${result} ${celsius.toFixed(2)}°C`;
    }
}

module.exports = {degrees, resultF}