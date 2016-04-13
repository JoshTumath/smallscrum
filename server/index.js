/*jshint node:true*/

module.exports = function(app) {
  var cors = require('cors');
  var globSync = require('glob').sync;
  var morgan = require('morgan');

  var mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  app.use(cors());

  // Log proxy requests
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });
};
