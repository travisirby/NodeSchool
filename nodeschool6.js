var mod6 = require ('./nodeschool6_mod');

mod6 (process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    throw err;
  }
  data.forEach( function (file){
    console.log(file);
  });
});

