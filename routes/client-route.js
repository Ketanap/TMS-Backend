var express = require("express");
var client = require("../services/client-service.js");
const env = require("dotenv");
const jwt = require("jsonwebtoken");
env.config();
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
      res.send(JSON.stringify(await client.getAll()));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
});
router.get("/:id", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    if (
      jwt.verify(
        req.header("authorization").substring(7),
        process.env.JWT_SECRET_KEY
      )
    ) {
      console.log(jwt.decode(req.header("authorization").substring(7)));
      res.send(JSON.stringify(await client.getOne(req.params.id)));

    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
});
router.post("/", async function (req, res) {
  console.log(req.header("authorization"));
  try {
    if (
      jwt.verify(
        req.header("authorization").substring(7),
      process.env.JWT_SECRET_KEY
      )
    ) {
      console.log(jwt.decode(req.header("authorization").substring(7)));
      res.send(JSON.stringify(await client.insert(req.body)));
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
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
      res.send(JSON.stringify(await client.delete(req.params.id)));
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
      res.send(JSON.stringify(await client.update(req.params.id, req.body)));
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


