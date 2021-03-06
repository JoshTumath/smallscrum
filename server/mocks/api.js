/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var Fortune = require('fortune');
  var JsonApiSerializer = require('fortune-json-api');

  var store = new Fortune({
    'project': {
      name: { type: String },
      slug: { type: String },

      supportTickets: { link: 'support-ticket', inverse: 'project', isArray: true },
      userStories: { link: 'user-story', inverse: 'project', isArray: true },
      assignedUsers: { link: 'user', inverse: 'projects', isArray: true }
    },

    'support-ticket': {
      name: { type: String },
      description: { type: String },
      complete: { type: Boolean },
      urgent: { type: Boolean },
      creationDate: { type: Date },

      project: { link: 'project', inverse: 'supportTickets' },
      user: { link: 'user', inverse: 'supportTickets' }
    },

    'user-story': {
      name: { type: String },
      acceptanceCriteria: { type: String },
      complete: { type: Boolean },

      project: { link: 'project', inverse: 'userStories' }
    },

    'user': {
      email: { type: String },
      password: { type: String },
      firstName: { type: String },
      lastName: { type: String },

      projects: { link: 'project', inverse: 'assignedUsers', isArray: true },
      supportTickets: { link: 'support-ticket', inverse: 'user', isArray: true }
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

  store.request({
    type: 'user',
    method: 'create',
    payload: [
      { email: 'test@example.com', password: 'password', firstName: 'John', lastName: 'Smith' }
    ]
  });
}
