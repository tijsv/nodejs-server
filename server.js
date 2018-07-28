// run script from package.json with the command: npm run NAME SCRIPT

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = new express();
var router = require('./app/routes.js');
const port = process.env.PORT || 8080;

// start the server
app.listen(port, function(){
  console.log("Listening to port", port, "\nServer running...");
});

// use ejs and express-ejs-layouts
app.set('view engine', "ejs");
app.use(expressLayouts);

// user router
app.use("/", router);

// declare static files folder name
app.use(express.static(__dirname + "/public"));
