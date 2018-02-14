// Get the data
var friendData = require("../data/friends.js");

// Define the routes
// Get Route
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Post Route
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
  });
};
