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
        var user = req.body;
        match = {
            data: 0,
            diff: user.scores.length * 5
        }

        for(i = 0; i < friends.length; i++)
        {
            var current =  friends[i].scores;
            var currentDiff = 0;
            //console.log(i);
            for(y = 0; y < current.length; y++)
            {
                currentDiff += Math.abs(current[y] - user.scores[y]);
            }

            if(currentDiff === 0)
            {
                match.data = friends[i];
                match.diff = currentDiff;
                break;
            }
            else if(currentDiff < match.diff)
            {
                match.data = friends[i];
                match.diff = currentDiff;
            }
        }

        friends.push(user);
        res.json(match.data);
    });
};
