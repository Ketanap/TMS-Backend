var express = require("express");
var client = require("../services/client-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(await client.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await client.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await client.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify(await client.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await client.update(req.params.id, req.body)));
});
module.exports = router;
