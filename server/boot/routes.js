module.exports = function(app) {
  // Install a "/ping" route that returns "pong"

  app.get('/welcome', function(req, res) {
    res.send('Welcome! Email confirmed, please go to: www.pic.cr');
  });

}


