const palindrome = (string) => {
    if(typeof string === 'undefined') return
    const stringReverse = string.split('').reverse().join('');
    return string === stringReverse ? true : false;
}

module.exports = {
    palindrome
}