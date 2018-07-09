const User = require('../models/user');

const oauth = require('./oauth');
const config = require('../config/database');

const jwt = require('jsonwebtoken');

const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


passport.use(new GoogleStrategy({
          // pull in our app id and secret from our config/oauth.js file
          clientID        : oauth.googleAuth.clientID,
          clientSecret    : oauth.googleAuth.clientSecret,
          callbackURL       : oauth.googleAuth.callbackURL
      },
function(token, refreshToken, profile, done) {
  console.log("config/passport.js: Passport callback function fired.");
  console.log("config/passport.js:" + profile);

  // asynchronous
  process.nextTick(function() {

      // find the user in the database based on their google id
      User.findOne({ 'google.id' : profile.id }, function(err, user) {

          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
              return done(err);

          // if the user is found, then log them in
          if (user) {
              token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: 604800 //1 week
            });
              return done(null, user); // user found, return that user

          } else {
              console.log(profile);
              console.log("----------------");
              // if there is no user found with that google id, create them
              var newUser = new User();
              // set all of the google information in our user model
              newUser.google.id    = profile.id;
              newUser.google.name  = profile.name.givenName + ' ' + profile.name.familyName;
              newUser.google.email = profile.emails[0].value;
              // save our user to the database
              newUser.save(function(err) {

                  if (err)
                      throw err;

                  // if successful, return the new user
                  console.log("google callback newUser.save fired");

                token = jwt.sign(newUser.toJSON(), config.secret, {
                    expiresIn: 604800 //1 week
                  });

                  // custom user info to display so we dont shpw the password
                  var googleuser = {
                    success: true,
                    token: 'JWT '+token,
                    user: {
                      id: newUser.google._id,
                      name: newUser.google.name,
                      email: newUser.google.email
                    }
                  }

                  return done(null, newUser);
                  console.log("google user saved");
              });
          }

      });
  });

}
));

// passport.use(new FacebookStrategy({
//
//         // pull in our app id and secret from our auth.js file
//         clientID        : oauth.facebookAuth.clientID,
//         clientSecret    : oauth.facebookAuth.clientSecret,
//         callbackURL     : oauth.facebookAuth.callbackURL
//
//     },
//   // facebook will send back the token and profile
// function(token, refreshToken, profile, done) {
//
//     // asynchronous
//     process.nextTick(function() {
//
//         // find the user in the database based on their facebook id
//         User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
//
//             // if there is an error, stop everything and return that
//             // ie an error connecting to the database
//             if (err)
//                 return done(err);
//
//             // if the user is found, then log them in
//             if (user) {
//                 return done(null, user); // user found, return that user
//             } else {
//                 // if there is no user found with that facebook id, create them
//                 var newUser            = new User();
//
//                 // set all of the facebook information in our user model
//                 newUser.facebook.id    = profile.id; // set the users facebook id
//                 newUser.facebook.token = token; // we will save the token that facebook provides to the user
//                 newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//                 newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
//
//                 // save our user to the database
//                 newUser.save(function(err) {
//                     if (err)
//                         throw err;
//
//                     // if successful, return the new user
//                     return done(null, newUser);
//                 });
//             }
//
//         });
//     });
//
// }));

//Not using this for local users (we did the authentication with our own functions)
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  if (err) {return done(err); }
  done(null, user);
});

 module.exports = function(passport) {
   let opts = {}
   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
   opts.secretOrKey = config.secret;
   passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
       console.log(jwt_payload);
       User.getUserById(jwt_payload._id, (err, user)=>{
           if (err) {
               return done(err, false);
           }
           if (user) {
               return done(null, user);
           } else {
               return done(null, false);
               // or you could create a new account
           }
       });
   }));


 }
