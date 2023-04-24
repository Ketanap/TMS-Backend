var express = require("express");
var task = require("../services/task-service.js");
var router = express.Router();
const env = require("dotenv");
env.config();
const jwt = require("jsonwebtoken");

router.get("/", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    const decodedToken = jwt.verify(
      req.header("authorization").substring(7),
      process.env.JWT_SECRET_KEY
    );
    console.log(decodedToken);
    const tasks = await task.getAll(decodedToken.userId); 
    res.send(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});
router.get("/:id", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    const decodedToken = jwt.verify(
      req.header("authorization").substring(7),
      process.env.JWT_SECRET_KEY
    );
    console.log(decodedToken);
    const taskData = await task.getOne(req.params.id); 
    res.send(JSON.stringify(taskData));
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});


router.post("/", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    const decodedToken = jwt.verify(
      req.header("authorization").substring(7),
      process.env.JWT_SECRET_KEY
    );
    console.log(decodedToken);
    const taskData = { ...req.body, userId: decodedToken.userId }; 
    const task = await task.insert(taskData);
    res.send(JSON.stringify(task));
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});



router.delete("/:id", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    if (
      jwt.verify(
        req.header("authorization").substring(7),
        process.env.JWT_SECRET_KEY
      )
    ) {
      console.log(jwt.decode(req.header("authorization").substring(7)));
      res.send(JSON.stringify(task.delete(req.params.id)));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});
router.put("/:id", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    if (
      jwt.verify(
        req.header("authorization").substring(7),
        process.env.JWT_SECRET_KEY
      )
    ) {
      console.log(jwt.decode(req.header("authorization").substring(7)));
      res.send(JSON.stringify(await task.update(req.params.id, req.body)));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});
module.exports = router;
