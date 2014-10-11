var http = require('http');

var getURL = http.get (process.argv[2], function (response){

  var dataArry = [];
  
  response.setEncoding('utf8');

  response.on('data', function(data) {
    dataArry.push(data);
  });

  response.on('end', function() {
    dataArry.forEach(function(elem) {
      console.log(elem);
    });
  });

});

getURL.on('error', function(err) {
  throw err;
});

/* WHY does the the end event have to be inside the callback??
getURL.on('end', function() {
  console.log('end');
  getURL.dataArry.forEach( function(elem) {
    console.log(elem);
  });
});
*/

/* Official solution:
var http = require('http')
    
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/

