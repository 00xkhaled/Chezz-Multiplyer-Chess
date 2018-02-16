var config = require('config');


// Setup the connection to mongo db
module.exports = function (app, mongoose) {


// create the connection and set reconnect true if it disconnected
    var connect = function () {
        var options = {
            server: {
                socketOptions: { keepAlive: 1 }
            },
            auto_reconnect:true
        };

        // set the db name to be used
        mongoose.connect(config.get('Chezz.db'), options);
    };
    connect();

    //  handle the errors
    mongoose.connection.on('error', function (err) {
        console.error('Error Connecting to MongoDB :P' + err);
    });

    // reconnect to the db when the connection is closed
    mongoose.connection.on('disconnected', function () {
        connect();
    });

};
