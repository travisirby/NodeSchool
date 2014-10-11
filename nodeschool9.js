var http = require('http');

function getURL (url, callback) {

//  var dataStr = ''; ** declare dataStr here if I want it to accumulate in the below URLS.foreach 
//  var self = this;  ** use self.dataStr within URLEvent to call it 
 
  var urlEvent = http.get (url, function (response){
    
    dataStr = '';

    response.setEncoding('utf8');

    response.on('data', function(data) {
      dataStr += data;
    });

    response.on('end', function() {
      callback(null, dataStr);
    });

  });

  urlEvent.on('error', function(err) {
    callback(err);
  });
}

var URLS = [
    [process.argv[2] , ''],
    [process.argv[3] , ''],
    [process.argv[4] , '']
];

var callbackCounter = 3;
  
URLS.forEach(function (url) {
  getURL(url[0], function (err, data){
    if (err){
      throw err;
    }
    url[1] = data;
    callbackCounter -= 1;
    if (callbackCounter === 0){
      URLS.forEach( function(arry) {
        console.log(arry[1].length);
      });
    }
  });
});
