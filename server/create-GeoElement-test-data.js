var server = require('./server');
var dataSource = server.dataSources.geoPointsDB;
var GeoElement = server.models.geoElement;
var geoElements = [
       { created: new Date(),
      updated: new Date(),
      createdBy: 1,
      updatedBy: 1,
      name: 'Arnoldo',
      location: {lat: 10.32424, lng: 5.84978},
    },
    { created: new Date(),
      updated: new Date(),
      createdBy: 2,
      updatedBy: 2,
      name: 'ArnoldoMora',
      location: {lat: 10.32424, lng: 5.84978},
    } ];

var count = geoElements.length;
dataSource.automigrate('geoElement', function(er) {
  if (er) throw er;
  geoElements.forEach(function(geoElement) {
    GeoElement.create(geoElement, function(er, result) {
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