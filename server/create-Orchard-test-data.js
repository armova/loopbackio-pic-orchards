var server = require('./server');
var dataSource = server.dataSources.geoPointsDB;
var Orchard = server.models.orchard;
var orchards = [
    { created: new Date(),
      updated: new Date(),
      createdBy: 4,
      updatedBy: 4,
      name: 'MyOrchard',
      location: {lat: 10.32424, lng: 5.84978},
    },
    { created: new Date(),
      updated: new Date(),
      createdBy: 3,
      updatedBy: 3,
      name: 'YourOrchard',
      location: {lat: 10.32424, lng: 5.84978},
    } ];

var count = orchards.length;
dataSource.automigrate('orchard', function(er) {
  if (er) throw er;
  orchards.forEach(function(orchard) {
    Orchard.create(orchard, function(er, result) {
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
