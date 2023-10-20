var path = require("path");
console.log(__filename);

console.log(__dirname + "/app.js");
console.log("./index.html");

var indexPAth = path.join(__dirname, "index.html");
console.log(indexPAth);
