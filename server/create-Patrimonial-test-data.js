var server = require('./server');
var dataSource = server.dataSources.geoPointsDB;
var Patrimonial = server.models.patrimonial;
var patrimonials = [
    { created: new Date(),
      updated: new Date(),
      createdBy: 5,
      updatedBy: 5,
      name: 'MyPatrimonial',
      location: {lat: 10.32424, lng: 5.84978},
    },
    { created: new Date(),
      updated: new Date(),
      createdBy: 6,
      updatedBy: 6,
      name: 'YourPatrimonial',
      location: {lat: 10.32424, lng: 5.84978},
    } ];

var count = patrimonials.length;
dataSource.automigrate('patrimonial', function(er) {
  if (er) throw er;
  patrimonials.forEach(function(patrimonial) {
    Patrimonial.create(patrimonial, function(er, result) {
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