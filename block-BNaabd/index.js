var http = require("http");
var server = http.createServer(handlRequest);
var querystring = require("querystring");

function handlRequest(req, res) {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = querystring.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
}
server.listen(7000, () => {
  console.log("Server listening on port 7000");
});
