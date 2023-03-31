
var express = require("express");
var taskstatus = require("../services/taskstatus-service.js");
var router = express.Router();
const env = require("dotenv");
env.config();
const jwt = require("jsonwebtoken");
router.get("/", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    if (
      jwt.verify(
        req.header("authorization").substring(7),
        process.env.JWT_SECRET_KEY
      )
    ) {
      console.log(jwt.decode(req.header("authorization").substring(7)));
      res.send(JSON.stringify(await taskstatus.getAll()));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
});
router.get("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.getOne(req.params.id)));
});
router.post("/", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.insert(req.body)));
});
router.delete("/:id", async function (req, res) {
  res.send(JSON.stringify( await taskstatus.delete(req.params.id)));
});
router.put("/:id", async function (req, res) {
  res.send(JSON.stringify(await taskstatus.update(req.params.id, req.body)));
});
module.exports = router;
