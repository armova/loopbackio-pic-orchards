module.exports = function(app) {
  // Install a "/ping" route that returns "pong"

  app.get('/welcome', function(req, res) {
    res.send('Bienvenido! Email confirmado, <a href="http://picmap.3votapp.com/"> por favor ir a la página principal</a>');
  });

}


