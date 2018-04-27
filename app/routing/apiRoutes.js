const friendArr = require('../data/friend');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    // gets array of all friends
    res.json(friendArr);
  });

  app.post('/api/friends', function(req, res) {
    friendArr.push(req.body);
    res.json(true);
  });
};
