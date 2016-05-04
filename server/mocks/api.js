/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var Fortune = require('fortune');
  var JsonApiSerializer = require('fortune-json-api');

  var store = new Fortune({
    'project': {
      name: { type: String },
      slug: { type: String },
      userStories: { link: 'user-story', inverse: 'project', isArray: true }
    },
    'user-story': {
      name: { type: String },
      project: { link: 'project', inverse: 'userStories' }
    }
  });

  seedDatabase(store);

  app.use('/api', Fortune.net.http(store, {
    // Set all communications to be done using JSON API
    serializers: [[JsonApiSerializer, {
      prefix: 'api'
    }]]
  }));
};

/**
 * Seed the database with initial test data
 * @param {Fortune} store the store
 */
function seedDatabase(store) {
  store.request({
    type: 'project',
    method: 'create',
    payload: [
      { name: 'Cardigan Bay Holiday Homes', slug: 'cardigan-bay-holiday-homes' },
      { name: 'Aberystwyth Garages', slug: 'aberystwyth-garages' },
      { name: 'NNP Letting Agency', slug: 'nnp' },
      { name: 'AUCU', slug: 'aberystwyth-cu' },
      { name: 'Borth College', slug: 'borth-college' }
    ]
  });
}
