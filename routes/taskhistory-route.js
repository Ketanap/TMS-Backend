var express = require("express");
var taskhistory = require("../services/taskhistory-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(await taskhistory.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskhistory.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify( taskhistory.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify( taskhistory.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskhistory.update(req.params.id, req.body)));
});
module.exports = router;
