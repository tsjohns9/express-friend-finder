const friendArr = require('../data/friend');
const diff = require('../data/diff');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    // gets array of all friends
    res.json(friendArr);
  });

  app.post('/api/friends', function(req, res) {
    const scores = friendArr.map(a => diff(a.scores, req.body.scores));
    friendArr.push(req.body);
    console.log(friendArr[scores.indexOf(Math.min(...scores))]);
    res.json(scores);
  });
};
