var express = require("express");
var routes = require("./routes/index.js");

var app = express();
app.use(express.json());

routes.init(app);
app.get("/", function (req, res) {
  res.send("Api Launched");
});
app.listen(9090);
console.log("Server running at http://127.0.0.1:9090/");
