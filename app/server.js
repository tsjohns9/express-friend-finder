const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');

const app = express();

// Sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

// passes express in to handles api routes
apiRoutes(app);
// passes express in to handles html routes
htmlRoutes(app);

// starts the server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
