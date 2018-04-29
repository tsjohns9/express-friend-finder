const friendArr = require('../data/friend');
const diff = require('../data/diff');

module.exports = function(app) {
  // sends all friend info
  app.get('/api/friends', function(req, res) {
    res.json(friendArr);
  });

  // scores stores an array of numbers representing the current users compatibility with each other user.
  // match is the index position of the user from friendArr who the user scored most closely too
  // The lowest score is the person the current user matches with.
  // Gets the index value of that match from the scores array. Passes the index of the match to friendArr to get the matched user.
  app.post('/api/friends', function(req, res) {
    const scores = friendArr.map(a => diff(a.scores, req.body.scores));
    const match = friendArr[scores.indexOf(Math.min(...scores))];
    friendArr.push(req.body);
    res.json(match);
  });
};
