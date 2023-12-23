const repeating = (text, x) => {
    if(typeof text === 'undefined') return
    return (text + ' ').repeat(x);
}

module.exports = {
    repeating
}