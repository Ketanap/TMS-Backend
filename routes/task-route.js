var express = require("express");
var task = require("../services/task-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(task.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(task.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(task.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify(task.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(task.update(req.params.id, req.body)));
});
module.exports = router;
