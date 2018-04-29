const friendArr = require('../data/friend');
const diff = require('../data/diff');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    // gets array of all friends
    res.json(friendArr);
  });

  app.post('/api/friends', function(req, res) {
    // scores stores an array of numbers representing the current users compatibility with each other user.
    // match is the index position of the user from friendArr who the user scored most closely too
    // does this by getting the lowest score from the scores array. The lowest score is the person the current user matches with.
    // Then it gets the index value of that match from the scores array. Passes the index of the match to friendArr to get the matched user.
    const scores = friendArr.map(a => diff(a.scores, req.body.scores));
    const match = friendArr[scores.indexOf(Math.min(...scores))];
    friendArr.push(req.body);
    res.json(match);
  });
};
