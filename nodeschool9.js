var http = require('http');

function getURL (url, callback) {

//  var dataStr = ''; ** declare dataStr here if I want it to accumulate in the below URLS.foreach 
//  var self = this;  ** use self.dataStr within URLEvent to call it 
  
  http.get (url, function (response){
       
    var dataStr = '';

    response.setEncoding('utf8');

    response.on('data', function(data) {
      dataStr += data;
    });

    response.on('end', function() {
      callback(null, dataStr);
    });

    response.on('error', function(err) {
      callback(err);
    });
  });
}

var URLS = [
    [process.argv[2] , ''],
    [process.argv[3] , ''],
    [process.argv[4] , '']
];

var callbackCounter = 3;

URLS.forEach(function (url,i,arr) {
  getURL(arr[i][0], function (err, data){
    if (err){
      throw err;
    }
    arr[i][1] = data;
    callbackCounter -= 1;
    if (callbackCounter === 0){
      arr.forEach( function(urls) {
        console.log(urls[1]);
      });
    }
  });
});
