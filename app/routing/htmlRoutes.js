var path = require('path');

module.exports = function(app) {
  app.get('/home.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // If no matching route is found default to 404 page
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/404.html'));
  });
};
