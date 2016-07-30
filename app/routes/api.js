'use strict';

// Dependencies
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var config = require('../config/config');

// Middelware
var auth = jwt({
    secret: config.jwt.secret,
    userProperty: 'payload'
});

// Controller
var profileCtrl = require('../controllers/profile');
var authCtrl = require('../controllers/authentication');

// Routes

// Profile
router.get('/profile', auth, profileCtrl.read);

// Product
router.post('/quote', productCtrl.create);
router.get('/quote/:quoteId', productCtrl.read);
router.put('/quote/:quoteId', productCtrl.update);
router.delete('/quote/:quoteId', productCtrl.delete);

// Authentication
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;
