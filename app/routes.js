module.exports = function (app, root) {
  app.get('*', function (req, res) {
    res.sendFile(root + '/public/index.html');
  });
};
