var express = require('express');
var bodyParser = require('body-parser');
var apiRoutes = require('./routing/apiRoutes');
var htmlRoutes = require('./routing/htmlRoutes');

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// apiRoutes(app);
// htmlRoutes(app)

// starts the server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
