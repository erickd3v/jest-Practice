let y = 0;
const slices = (x, y, z) => {
    if(typeof x === 'undefined') return
    return x.slice(y,z);
}

module.exports = {
    slices
}