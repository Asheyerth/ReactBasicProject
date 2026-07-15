//Handler for the routes
const express = require('express');
const router = express.Router();

router.post('/addList', (req, res) => {
  res.send('POST request to the homepage');
});


module.exports = router;