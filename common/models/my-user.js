var config = require('../../server/config.json');

module.exports = function(MyUser) {

	MyUser.getApp(function(err, app) {
      MyUser.email.attachTo(app.dataSources.myEmailDataSource);
    });

	MyUser.afterRemote('create', function(ctx, user, next) {
		var uId = user.id;
      	var options = {
          	type: 'email',
          	to: user.email,
          	from: 'a3@3vot.com',
          	subject: 'Hola! Gracias por registrarte en la PIC',
          	text: 'Abrí este link y tu cuenta quedará verificada: {href}',
          	//template: './verify.ejs',
          	redirect: '/',
          	verifyHref: 'http://sheltered-hollows-7317.herokuapp.com/api/myUsers/confirm?uid=' + uId + '&redirect=/welcome'
    	};
    	MyUser.verify(options, next);
	});

  MyUser.on('resetPasswordRequest', function(info){
    var url = 'http://pic.cr/resetpassword';
    var html = 'Go to <a href="' + url
      + '">PIC Reset Page</a> to reset your password, copy this token: ' + info.accessToken.id;

    MyUser.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

};
