var fs = require('fs');

file = fs.readFileSync(process.argv[2]);

fileString = file.toString();
strArray = fileString.split('\n');

// strArray.forEach(function(elem,i){ console.log(elem);});

console.log(strArray.length - 1);
