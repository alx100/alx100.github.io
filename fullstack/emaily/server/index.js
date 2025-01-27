const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// Load models
require('./models/User');
require('./models/Survey');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Express middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,  // 30 days in milliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Load routs
require('./routs/authRoutes')(app);
require('./routs/billingRoutes')(app);
require('./routs/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file or main.css
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {  
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});