const express = require("express");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const user = require("../services/user-service.js");
const router = express.Router();

// Define a middleware function to check for authentication
const authenticate = (req, res, next) => {
  // Get the authorization header from the request
  const authHeader = req.headers['authorization'];
  // Check if the authorization header is present and has a valid format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Extract the token from the authorization header
  const token = authHeader.split(' ')[1];
  // Verify the token using the secret key used to generate it
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Add the decoded token to the request object for future use
    req.user = decoded;
    // Call the next middleware function
    next();
  });
};

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

// Modify the /changepassword route to use the authenticate middleware
router.post("/changepassword", authenticate, async (req, res) => {
  try {
    const result = await user.changepassword(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to change password' });
  }
});

router.post("/logintoken/", async (req, res) => {
  res.send(await user.logintoken(req.body));
});

module.exports = router;
