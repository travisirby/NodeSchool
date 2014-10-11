fs = require("fs")
path = require("path")

ext = process.argv[3]

fs.readdir(process.argv[2], function (err, fileList){
	fileList.forEach( function(elem){
		if (path.extname(elem) === "."+ext) console.log(elem)
		})
})

// so semicolons are optional.. interesting.
// but crockford says use them.
