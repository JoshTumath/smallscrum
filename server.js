var express = require('express');
var routes = require('./app/routes');

var app = express();
var port = process.env.PORT || 3000;

// Configuration ///////////////////////////////////////////////////////////////
// The location from which the Ember application will be served
app.use(express.static(__dirname + '/public'));

// Routes //////////////////////////////////////////////////////////////////////
routes(app);

// Listen //////////////////////////////////////////////////////////////////////
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

module.exports = app;
