var http = require("http");
var path = require("path");

var relativePath = "./index.html";
var appAbsolutePath = __dirname;

var server = http.createServer(handleRequest);
path.join(__dirname, "index.html");
console.log(relativePath, appAbsolutePath, __dirname + "/index.html");
function handleRequest(req, res) {
  console.log(req.method);
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    res.statusCode = 201;
    res.write(store);
    res.end();
  });
}

server.listen(3000, () => {
  console.log("server listening on port 3k");
});
