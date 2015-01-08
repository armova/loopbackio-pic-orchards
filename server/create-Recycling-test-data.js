var server = require('./server');
var dataSource = server.dataSources.geoPointsDB;
var Recycling = server.models.recycling;
var recyclings = [
    { created: new Date(),
      updated: new Date(),
      createdBy: 1,
      updatedBy: 1,
      name: 'MyRecycling',
      location: {lat: 10.32424, lng: 5.84978},
      ownerId: 1,
    },
    { created: new Date(),
      updated: new Date(),
      createdBy: 1,
      updatedBy: 1,
      name: 'YourRecycling',
      location: {lat: 10.32424, lng: 5.84978},
      ownerId: 1,
    } ];

var count = recyclings.length;
dataSource.automigrate('recycling', function(er) {
  if (er) throw er;
  recyclings.forEach(function(recycling) {
    Recycling.create(recycling, function(er, result) {
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
