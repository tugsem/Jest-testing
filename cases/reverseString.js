function reverseString(str) {
    str = str.split('');
    str.reverse();
    return str.join('');
}

module.exports = reverseString;