var fs = require('fs');

file = process.argv[2];

//fs.readFile(file, 'utf8', sumFile);

//function sumFile(err,data){
//	if (err) throw err;
//	console.log(data.split('\n').length-1);
//}

// Better to use anonymous function because the gc 
// will immediately destroy the function.
// Non anonymous callbacks can lead to memory leaks!
// so:

fs.readFile(file, 'utf8', function(err, data) {
	if (err) throw err;
	console.log(data.split('\n').length-1);
});

