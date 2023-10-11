const makeid = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( counter = 0 ; counter < length; counter++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports = makeid
