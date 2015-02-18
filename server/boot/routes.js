module.exports = function(app) {
  // Install a "/ping" route that returns "pong"

  app.get('/welcome', function(req, res) {
    res.send('Listo! Email confirmado, por favor ir a la <a href="http://picmap.3votapp.com/">página principal</a>');
  });

}


