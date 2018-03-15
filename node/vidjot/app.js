const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

//Load routes
const index = require('./routes/index');
const about = require('./routes/about');
const ideas = require('./routes/ideas');
const users = require('./routes/users');

// Passport Config
require('./config/passport')(passport);


// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method Override middleware --> override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Express session middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Set global variables for connect-flash
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user =  req.user || null; 
  next();
});

// Use routes
app.use('/', index);
app.use('/about', about);
app.use('/ideas', ideas);
app.use('/users', users);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



// How middleware works

// app.use(function(req, res, next){
//   console.log(Date.now());
//   req.name = 'Alex Stotsky';
//   next();
// });