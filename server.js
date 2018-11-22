// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('app/public/assets'));

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});