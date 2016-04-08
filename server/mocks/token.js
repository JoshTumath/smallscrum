/*jshint node:true*/
module.exports = function(app) {
  var bodyParser = require('body-parser');
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.use(bodyParser.urlencoded({ extended: false }));

  tokenRouter.post('/', function (req, res) {
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

  app.use('/token', tokenRouter);
};
