var express = require("express");
var user = require("../services/user-service.js");
var router = express.Router();
router.get("/", async function (req, res) {
  console.log("GetAll");
  console.log(JSON.stringify(await user.getAll()));
  res.send(JSON.stringify(await user.getAll()));
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await user.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await user.insert(req.body)));
});
router.post("/login/", async function (req, res) {
  res.send(JSON.stringify(await user.login(req.body)));
});

router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify(await user.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await user.update(req.params.id, req.body)));
});
module.exports = router;
