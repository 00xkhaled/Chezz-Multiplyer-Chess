// Express is a minimalist web framework for Node.js
var express = require('express');

// Simple session middleware for Express
var session = require('express-session');

// Node.js File System Module
var fs = require('fs');

// routing for web browsers
var path = require('path');

// request logger middleware for node.js
var logger = require('morgan');

// cookie paring module
var cookieParser = require('cookie-parser');

// body parser module
var bodyParser = require('body-parser');

// mongoose for mongo db  connection
var mongoose = require('mongoose');

// passport js for auth
var passport = require('passport');

// Session used for storing messages
var flash = require('connect-flash');

// Set .env variables
var env = process.env.NODE_ENV || 'default';

// intialize the configuratuins
var config = require('config');

// intialize express
var app = express();

// configure database
require('./config/db')(app, mongoose);

// bootstrap data models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

// configure express app
app.set('views', path.join(__dirname, 'views'));

// configure the hbs templating engine
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configure cookie parser secret
app.use(cookieParser('S3CRE7'));
app.use(flash());

app.use(session({ secret: 'S3CRE7-S3SSI0N', saveUninitialized: true, resave: true } )); // session token ( save uinitialized)

// express to use public folder for static resources
app.use(express.static(path.join(__dirname, 'public')));

// require the use of passport js for auth and login or sigb up for te session ( intialzation and session)
require('./config/passport')(app, passport);
app.use(passport.initialize());
app.use(passport.session());

// Configure routes
var routes = require('./routes/index');

// account route
var account = require('./routes/account');

// Api route
var api = require('./routes/api');

// play route
var play = require('./routes/play');

// login route
var login = require('./routes/login');

// signup route
var signup = require('./routes/signup');

// use routes directories and path of file name
app.use('/', routes);
app.use('/login', login);
app.use('/signup', signup);
app.use('/account', account);
app.use('/play', play);
app.use('/api', api);

// Configure error handlers
require('./config/errorHandlers.js')(app);

// Launch app server
var server = require('http').createServer(app).listen(3000);

// require socket.io
require('./config/socket.js')(server);

module.exports = app;

console.log('What is the beginning of eternity, the end of time and space, the beginning of every end and the end of every race?')
