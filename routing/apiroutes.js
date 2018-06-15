var friendsData = require("../app/data/friends");
var path = require('path');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);

    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userResponses = userData.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 100;

        for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
            for (var j = 0; j < userResponses.length; j++) {
                difference += Math.abs(friendsData[i].scores[j] - userResponses[j]);


            }


            if (difference < totalDifference) {

                totalDifference = difference;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;

            }

        }
        friendsData.push(userData);
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage })

    });

};
