var http = require("http");
var fs = require("fs");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  fs.createReadStream("file.js");
}
server.listen();
