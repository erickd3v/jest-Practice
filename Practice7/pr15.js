const { err } = require("../Practice6/pr13");

const result = [];
const change = (number, base) => {
  const binario = [];
  if (typeof number === "undefined") return;
  if (typeof number !== "number") return err;

  if (base === 2) {
    /**90%, colocalo dentro de un ciclo while 
        const residuo = number % 2; // ok
        binario.push(residuo) // 50% cambiar push por unshift
        const decimal = Math.floor(number/base); // ok
        return decimal; // ok
        */

    /** error
         * 
            // for(i = 20; i > number; i++){
            //     // console.log(decimal);
            //     console.log(i/2);
            // } 
        */

    /** Forma corregida */
    while (number > 0) {
      const residuo = number % 2;
      binario.unshift(residuo);
      const decimal = Math.floor(number / base);
      number = decimal;
    }
    result.push(`${binario.join("")} base ${base}`);
    return `${binario.join("")} base ${base}`;
  } else if (base === 10) {
    /** 70% correcto 
        const changeBeta = number.toString().split(''); // falto agregar .map(Number)
        // `const decimal = []` debe de cambiarse a `let decimal = 0` dentro del `else if`
        for (let i = 0; i < changeBeta.length; i++) {
            const element = i; // la longuitud de changeBeta debe ser restada - 1 - i, con eso element pasa de ser = 0 1 2 3; `a´ 3 2 1 0;
            // se debio sumar de forma continua decimal de la siguiente forma: 
            // decimal += changeBeta[i] * (2 ** (changeBeta - 1 - element));
        }
        // return decimal;
        */

    /**error
             * 
            // change.forEach(e => {
            //     const finish = e * (2**i);
            //     // console.log(e);
            // });
             */

    /**Forma corregida */
    const change = number.toString().split("").map(Number);
    let decimal = 0;
    for (let i = 0; i < change.length; i++) {
      const power = change.length - 1 - i;
      decimal += change[i] * 2 ** power;
    }
    result.push(`${decimal} base ${base}`);
    return `${decimal} base ${base}`;
  }
};

module.exports = { change, result };
