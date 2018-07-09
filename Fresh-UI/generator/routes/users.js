const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('../config/database');


// REGISTER
router.post('/register',(req,res,next)=>{
  let newUser = new User();
  newUser.local.name = req.body.name,
  newUser.local.username = req.body.username
  newUser.local.password = req.body.password,
  newUser.local.email = req.body.email,
  console.log("routes:/register ------------->" + req.body);

  User.addUser(newUser,(err,user)=>{
      if(err){
          res.json({success: false, msg:'Failed to register user'});
        } else {
          res.json({success: true, msg:'User registered'});
        }
  });

});


// AUTHENTICATION
router.post('/authenticate',(req,res,next)=>{
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username,(err,user)=>{
    if(err) throw err;
    if(!user){
      return res.json({succcess: false, msg: 'User not found'});
    }

  User.comparePassword(password, user.local.password, (err, isMatch) => {
    if(err) throw err;
    if(isMatch){
      const token = jwt.sign(user.toJSON(), config.secret, {
        expiresIn: 604800 //1 week
      });

      // custom user info to display so we dont shpw the password
      res.json({
        success: true,
        token: 'JWT '+token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email
        }
      });
    } else {
      return res.json({succcess: false, msg: 'Wrong password'})
    }
  });
  });

});


// PROFILE
router.get('/profile',
passport.authenticate('jwt',{session:false}), (req,res,next)=>{
  console.log('routes: get /profile --------->' +  req.user);
  res.json({user: req.user});
  console.log('express profile route called');
});




module.exports = router;
