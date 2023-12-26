const deleting = (string, d) => {
    if(typeof string === 'undefined') return;
    const newArr = string.split(d).join('');
    return newArr
}

module.exports = {
    deleting
}
