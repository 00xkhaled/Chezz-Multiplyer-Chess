var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var util = require('../config/util.js');
var User = mongoose.model('User');

var router = express.Router();

router.get('/', function(req, res) {
           var logoutSuccessMessage = req.flash('logoutSuccess');
           var signupSuccessMessage = req.flash('signupSuccessMessage');
           res.render('partials/index', {
               title: 'Chezz',
               logoutSuccessMessage: logoutSuccessMessage,
               signupSuccessMessage: signupSuccessMessage,
               user: req.user,
               isHomePage: true
           });
});

router.get('/game/:token/:side', function(req, res) {
    var token = req.params.token;
    var side = req.params.side;
    res.render('partials/game', {
        title: 'Chezz - Game ' + token,
        user: req.user,
        isPlayPage: true,
        token: token,
        side: side
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('logoutSuccess', 'You have been successfully logged out');
    res.redirect('/');
});


module.exports = router;
