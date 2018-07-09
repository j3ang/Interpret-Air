"use strict";
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const faker = require('faker');
const saltRounds = 10;

//User Schema
const UserSchema = mongoose.Schema({
  local:{
      name         : { type: String, required: false},
      username     : { type: String, required: false},
      password     : { type: String, required: false},
      email        : { type: String, required: false},
    },

  facebook:{
    id           : {type: String},
    token        : {type: String},
    name         : {type: String},
    email        : {type: String},
  },
  google:{
    id           : {type: String},
    token        : {type: String},
    name         : {type: String},
    email        : {type: String},
  }

});

// create the model for users and expose it to our app
const User = module.exports = mongoose.model('User', UserSchema);


// export user functions for app to use
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {"local.username": username};
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){

console.log("addUser:" + newUser);
  bcrypt.genSalt(10,(err, salt)=>{
    bcrypt.hash(newUser.local.password, salt, (err, hash)=>{
      console.log("------newUser------");
      console.log(newUser);
      if (err) throw err;
      newUser.local.password=hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
    if(err) throw err;
    else {
      console.log("model:/users: password matched");
      callback(null,isMatch);
    }
  });
}
