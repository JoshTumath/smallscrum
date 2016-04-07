/*jshint node:true*/

module.exports = function(app) {
  var Fortune = require('fortune');
  var JsonApiSerializer = require('fortune-json-api');

  app.use('/api', Fortune.net.http(new Fortune({
    // Models
    project: {
      name: { type: String },
      slug: { type: String },
      userStories: { link: 'userStory', inverse: 'project', isArray: true }
    },
    userStory: {
      name: { type: String },
      project: { link: 'project', inverse: 'userStories' }
    }
  }), {
    // Set all fortune.js communications to be done using JSON API
    serializers: [[JsonApiSerializer, {
      prefix: 'api'
    }]]
  }));
};
