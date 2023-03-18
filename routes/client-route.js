var express = require("express");
//var user = require("../component/user/service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify("client.getAll()"));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify("client.getOne(req.params.id)"));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify("client.insert(req.body)"));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify("client.delete(req.params.id)"));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify("client.update(req.params.id, req.body)"));
});
module.exports = router;
