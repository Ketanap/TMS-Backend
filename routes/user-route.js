var express = require("express");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
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
router.post("/logintoken/", async (req, res) => {
  res.send(await user.logintoken(req.body));
});
router.post("/changepassword", async (req, res) => {
  try {
    const result = await user.changepassword(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to change password' });
  }
});

module.exports = router;
