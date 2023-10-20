var http = require("http");
const { forInRight } = require("lodash");
var qs = require("querystring");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = "";
  console.log(req.headers["content-type"]);
  req
    .on("data", (chunk) => {
      store += chunk;
    })
    .on("end", () => {
      if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        var formData = qs.parse(store);
        res.setHeader("content-type", "text/html");
        res.end(`<h1>${formData.name}</h1> <h2>${formData.email}</h2>`);
      }
      if (req.headers["content-type"] === "application/json") {
        //res.end(store);
        var jsonData = JSON.parse(store);
        res.setHeader("content-type", "text/html");
        res.end(`<h1>${jsonData.name}</h1> <h2>${jsonData.email}</h2>`);
      }
    });
}

server.listen(3000, () => {
  console.log("server listening on port 3k");
});
