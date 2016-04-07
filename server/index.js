/*jshint node:true*/

module.exports = function(app) {
  var Fortune = require('fortune');
  var JsonApiSerializer = require('fortune-json-api');
  var seed = require('./seed');

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

  // Tell the server to let fortune.js handle all API calls to
  app.use('/api', Fortune.net.http(store, {
    // Set all communications to be done using JSON API
    serializers: [[JsonApiSerializer, {
      prefix: 'api'
    }]]
  }));

  seed(store);
};
