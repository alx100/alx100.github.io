const express = require('express');
const router = express.Router();

// Index Route
router.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

module.exports = router;