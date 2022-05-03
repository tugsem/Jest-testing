const capitalizeStr = (str) => {
    if(typeof str === 'string') {
        const firstLetter = str[0].toUpperCase();
        const remain = str.slice(1);
        return firstLetter + remain;
    }
    throw new Error('invalid argument')
}

module.exports = capitalizeStr;