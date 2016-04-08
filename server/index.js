/*jshint node:true*/
'use strict';

module.exports = function(app) {
  var Fortune = require('fortune');
  var JsonApiSerializer = require('fortune-json-api');
  var morgan = require('morgan');
  var routes = require('./routes');
  var seedDatabase = require('./seed');

  // Create the fortune.js data manager with models to be used by the database
  var store = new Fortune({
    project: {
      name: { type: String },
      slug: { type: String },
      userStories: { link: 'userStory', inverse: 'project', isArray: true }
    },
    userStory: {
      name: { type: String },
      project: { link: 'project', inverse: 'userStories' }
    }
  });

  seedDatabase(store);

  // Log proxy requests
  app.use(morgan('dev'));

  // Set up additional mock resources
  app.use('/', routes());

  // Tell the server to let fortune.js handle all API calls to
  app.use('/api', Fortune.net.http(store, {
    // Set all communications to be done using JSON API
    serializers: [[JsonApiSerializer, {
      prefix: 'api'
    }]]
  }));
};
