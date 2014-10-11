var http = require('http');

var getURL = http.get (process.argv[2], function (response){

  var dataStr = '';

  response.setEncoding('utf8');

  response.on('data', function(data) {
    dataStr += data;
  });

  response.on('end', function() {
    console.log(dataStr.length);
    console.log(dataStr);
  });

});

getURL.on('error', function(err) {
  throw err;
});
