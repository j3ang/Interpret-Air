'use strict';

const express = require('express');
const path = require('path');
const cors=require('cors');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const pug = require('pug');
const config = require('./config/database');
const gulp = require('gulp'); // Load gulp
require('./gulpfile'); // Loads our config task
require('dotenv').config();
const User = require('./models/user');
const faker = require('faker');

gulp.start('build');

// Connect to mongodb
mongoose.connect(config.dbUrl);

// ON connection
mongoose.connection.on('connected',()=>{
  console.log("connected to " + process.env.MONGO_DB + " with username: " + process.env.MONGO_USERNAME );
  console.log("webserver IP: "+ process.env.AIR_WS_IP);
  console.log("database IP: "+ process.env.AIR_DB_IP);
  console.log("Wait for Angular to build and open --> "+"https:/\/"+ process.env.AIR_WS_IP +":3000");
});

// On Error
mongoose.connection.on('error',(err)=>{
  console.log('Database error: ' + err);
});

const users = require('./routes/users');
const socialusers = require('./routes/socialusers');

const app = express();

//use cors module to allow the app to run on more than one port
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware for AUTHENTICATION
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', users);
app.use('/socialusers', socialusers);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("Injecting Test Users");
console.log("----------------------------------")
for(var x=0;x<15;x++){
  let newUser = new User();
  newUser.local.name = faker.name.findName(),
  newUser.local.username = faker.internet.userName(),
  newUser.local.password = faker.internet.password(),
  newUser.local.email = faker.internet.email(),

  User.addUser(newUser);
console.log(newUser);
}


/* GET home page. */
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'))
});


module.exports = app;
