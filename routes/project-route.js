var express = require("express");
var project = require("../services/project-service.js");
var router = express.Router();
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
      res.send(JSON.stringify(await project.getAll()));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
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
