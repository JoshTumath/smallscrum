'use strict';

/**
 * Routes for additional pages and services being mocked.
 * @return {Router} the express.js router middleware
 */
module.exports = function () {
  var bodyParser = require('body-parser');
  var express = require('express');

  var router = express.Router();

  router.use(bodyParser.json({ type: 'application/*+json' }));
  router.use(bodyParser.urlencoded({ extended: false }));

  // Mock oauth2 response
  router.post('/token', function (req, res) {
    if (req.body.grant_type !== 'password') {
      res.status(400).json({
        'error': 'unsupported_grant_type'
      });
      return;
    }

    if (!(req.body.username === 'test@example.com' && req.body.password === 'password')) {
      res.status(400).json({
        'error': 'invalid_grant'
      });
      return;
    }

    res.json({
      'access_token': 'secret_token'
    });
  });

  return router;
};
