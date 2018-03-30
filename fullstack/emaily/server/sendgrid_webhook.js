var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'https://alx100subdomain.localtunnel.me' }, function(err, tunnel) {
  console.log('LT running');
});