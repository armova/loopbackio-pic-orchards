module.exports = function(Orchard) {
	/*
  Orchard.status = function(cb) {
    	var currentDate = new Date();
    	var currentHour = currentDate.getHours();
    	var OPEN_HOUR = 6;
    	var CLOSE_HOUR = 20;
    	console.log('Current hour is ' + currentHour);
    	var response;
    	if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      		response = 'We are open for business.';
    	} else {
      		response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    	}
    	cb(null, response);
  	};
  	
  	Orchard.remoteMethod(
    	'status',
    	{
      		http: {path: '/status', verb: 'get'},
      		returns: {arg: 'status', type: 'string'}
    	}
  	);


	Orchard.afterRemote('**', function(ctx, user, next) {
  		console.log(ctx.methodString, 'was invoked remotely');
  		next();
	});
*/

};
