const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// Sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '/data')));

const PORT = process.env.PORT || 8000;

// passes express in to handles api routes
apiRoutes(app);
// passes express in to handles html routes
htmlRoutes(app);

// starts the server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
