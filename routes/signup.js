var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var util = require('../config/util.js');
var User = mongoose.model('User');

var router = express.Router();

router.get('/', function(req, res) {
    var errors = req.flash('error');
    var error = '';
    if (errors.length) {
        error = errors[0];
    }

    res.render('partials/signup', {
        title: 'Chezz - signup',
        error: error,
        isLoginPage: true
    });
});

router.post('/', function(req, res, next) {

    var email = req.body.email;
    var name = req.body.userName;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;

    User.findOne({email: email} ,function (err, user) {
        if (user !== null) {
            req.flash('signupStatus', false);
            req.flash('error', 'We have already an account with email: ' + email);
            res.redirect('/signup');
        } else { // no user found
            if(password === confirmPassword) {
                var u = new User({ name: name, email: email, password: util.encrypt(password) });
                u.save(function (err) {
                    if (err) {
                        next(err);
                    } else {
                        console.log('new user:' + u);
                        req.login(u, function(err) {
                            if (err) { return next(err); }
                            req.flash('signupStatus', true);
                            req.flash('signupSuccessMessage', 'Welcome ' + u.name + "!");
                            return res.redirect('/');
                        });
                    }
                });
            } else {
                req.flash('signupStatus', false);
                req.flash('error', 'The confirmation password does not match the password');
                res.redirect('/signup');
            }
        }
    });
});

module.exports = router;
