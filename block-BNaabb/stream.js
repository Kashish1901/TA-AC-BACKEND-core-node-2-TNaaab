var http = require("http");

var server = http.createServer(handleREquest);

function handleREquest(req, res) {
  var store = " ";
  req.on("data", (chunk) => {
    store = store + chunk;
  });
}

server.listen(3456, () => {
  console.log("Server listening on port 3456");
});
