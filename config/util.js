var crypto = require('crypto');

module.exports = {

// encrypt the password using md5 :)
    encrypt: function (plainText) {
        return crypto.createHash('md5').update(plainText).digest('hex');
    },

// use random string made out of numbers and upper and lower case letterss 
    randomString: function (length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';

        var string = '';

        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            string += chars.substring(randomNumber, randomNumber + 1);
        }

        return string;
    }
};
