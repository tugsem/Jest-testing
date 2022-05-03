function stringLength(str) {
    if(str.length > 0 && str.length <= 10){
        return str.length;
    }
    throw new Error('String size must be between 1 and 10');
}

module.exports = stringLength;