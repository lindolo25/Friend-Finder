var friends = require("../data/friends");
var survey = require("../data/survey");

module.exports = function(app) 
{
    app.get("/api/friends", function(req, res) 
    {
        res.json(friends);
    });

    app.get("/api/survey", function(req, res) 
    {
        res.json(survey);
    });

    app.post("/api/survey", function(req, res) 
    {
        res.json(true);
    });
};
