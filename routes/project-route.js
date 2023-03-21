var express = require("express");
var project = require("../services/project-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  res.send(JSON.stringify(await project.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await project.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await project.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify(await project.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await project.update(req.params.id, req.body)));
});
module.exports = router;
