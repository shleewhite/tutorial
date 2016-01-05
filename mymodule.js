var fs = require('fs');
var path = require('path');

module.exports = function (dPath, dExt, callback){
	fs.readdir(dPath, function(err, files) {
		if (err) return callback(err);
		var match = [];
		var ext = '.' + dExt;
		files.forEach(function(file){
			if (path.extname(file) === ext) {
				match.push(file);
			}
		});
		return callback(null, match);
	});
}