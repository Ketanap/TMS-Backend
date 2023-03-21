var express = require("express");
var taskstatus = require("../services/taskstatus-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(await taskstatus.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify(await  taskstatus.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.update(req.params.id, req.body)));
});
module.exports = router;
