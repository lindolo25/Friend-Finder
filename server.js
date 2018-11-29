// Dependencies
// =============================================================
var express = require("express");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('app/public/assets'));

// Routes
// ============================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});