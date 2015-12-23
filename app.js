var config = require('./config.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes.js')(app);

app.listen(config.port, function () {
  console.log('Listening on', config.port);
});
