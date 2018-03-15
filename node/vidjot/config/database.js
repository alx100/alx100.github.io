if (process.env.NODE_ENV === 'production') {
  // mLab cloud DB
  module.exports = {
    mongoURI: 'mongodb://alx100:alx100@ds115579.mlab.com:15579/vidjot-prod'
  };
} else {
  // Local DB
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}