var http = require('http');
var fs = require('fs');

var fileRead = process.argv[3];
var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
	var fsStream = fs.createReadStream(fileRead);
	fsStream.pipe(res);
});

server.listen(port);