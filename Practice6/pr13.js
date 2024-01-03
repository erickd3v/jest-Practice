const par = [];
const impar = [];
const err = new Error(`Error el tipo de dato no es un número`);

const parImpar = (number) => {
    if(typeof number === 'undefined') return;
    if(typeof number !== 'number') return err;
    if(number % 2 === 1) { 
        impar.push(number) 
    } else {
        par.push(number);
    }
    return (number % 2 === 1) ? 'Impar' : 'Par';
}


module.exports = {
    parImpar,
    par,
    impar,
    err
}