const express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// route for the homepage
router.get("/", function(request, response) {
  // response.sendFile(path.join(__dirname, '../index.html'));
  response.render('./pages/index.ejs');
});

// route for another page
router.get("/secretpage", function(request, response) {
  response.send("This is a secret page without any content. Good job finding it though!");
});

// exports this module so it can be accessed by server.js
module.exports = router;
