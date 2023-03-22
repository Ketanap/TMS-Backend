var express = require("express");
var  task = require("../services/task-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(await task.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await task.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await task.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify( task.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await task.update(req.params.id, req.body)));
});
module.exports = router;
