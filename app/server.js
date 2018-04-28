const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serves static js/css files
app.use('/static', express.static(path.join(__dirname, '/public/assets')));

// passes express in to handles api and html routes
apiRoutes(app);
htmlRoutes(app);

// starts the server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
