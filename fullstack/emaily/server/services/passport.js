const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
// Load model 
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  // Refactored with async/await
  async(accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
    
    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});


// with Promises
// (accessToken, refreshToken, profile, done) => {
//   User.findOne({ googleId: profile.id })
//     .then((existingUser) => {  
//       if (existingUser) {
//         // we already have a record with the given profile ID
//         done(null, existingUser);
//       } else {
//         // we don't have a user record with this ID, make a new record
//         new User({ googleId: profile.id }).save()
//           .then(user => done(null, user));
//       }
//     });
// }