var express = require("express");
var cors = require("cors");
var env = require("dotenv");
var routes = require("./routes/index.js");

var app = express();
app.use(cors());
app.use(express.json());
routes.init(app);
env.config();
console.log(process.env.MYSQL);
app.get("/", function (req, res) {
  res.send("Api Launched");
});
app.listen(9090);
console.log("Server running at http://127.0.0.1:9090/");
