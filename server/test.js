// This file should be run before running `ember test` in order to launch the
// API mock server.

var express = require('express');
var server = require('./index');

var app = express();
var port = process.env.PORT || 4200;

server(app);

app.listen(4200, function () {
  console.log('Listening on port ' + port);
});
