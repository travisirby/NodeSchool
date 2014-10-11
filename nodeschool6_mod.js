fs = require("fs");
path = require("path");

module.exports = function (directory, ext, callback) {
  fs.readdir(directory, function (err, fileList){
    if (err) {
      return callback(err);
    }
    var filteredFiles = []
    fileList.forEach( function (file) {
      if ("." + ext === path.extname(file)) {
        filteredFiles.push(file);
      }
    });
    return callback(null, filteredFiles);
  });
}
