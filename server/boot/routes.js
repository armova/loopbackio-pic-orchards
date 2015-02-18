module.exports = function(app) {
  // Install a "/ping" route that returns "pong"

  app.get('/welcome', function(req, res) {
    res.send('Bienvenido! Email confirmado, por favor ir a la página principal picmap.3votapp.com');
  });

}


