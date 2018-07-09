const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('../config/database');
require('dotenv').config();

// Facebook auth routes
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope : ['public_profile', 'email']
}));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

// -------------------------------------------------------------------

// Google auth routes
router.get('/auth/google', passport.authenticate('google', {
  scope : ['email'],
  callbackURL : "https://" + process.env.AIR_WS_IP +".xip.io:3000/socialusers/auth/google/callback",
}));


// handle the callback after google has authenticated the user
router.get('/auth/google/callback',
  passport.authenticate('google'), (req, res, next)=>{
   res.json({
     success: true,
     // token: 'JWT '+token,
     googleUser: {
       id: req.user.google.id,
       name: req.user.google.name,
       email: req.user.google.email
     }
   });
 }
    // Successful authentication, redirect to authenticated dashboard.
    // res.redirect('/#/dashboard');
);

module.exports = router;
