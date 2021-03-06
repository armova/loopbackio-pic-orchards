var loopback = require('loopback');
var server = require('./server');

var dataSource = server.dataSources.geoPointsDB;
var MyUser = server.models.myUser;

var myUsers = [
    { email: 'mymail@mail.com',
      password: 'secret1'
    },
    { email: 'yourmail@mail.com',
      password: 'secret2'
    } ];

var count = myUsers.length;
dataSource.automigrate('myUser', function(er) {
  if (er) throw er;
  myUsers.forEach(function(myUser) {
    MyUser.create(myUser, function(er, result) {
      if (er) return;
      console.log('Record created:', result);
      count--;
      if(count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});



