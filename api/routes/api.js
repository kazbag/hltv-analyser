const env = require("dotenv").config();
const jwt = require("jsonwebtoken");
const api = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretkey";

api.post("/test-auth", verifyToken, (req, res, next) => {
  if (req.authData === undefined) return res.sendStatus(400);
  const { user } = req.authData;
  user ? res.json(user) : res.sendStatus(403);
});

api.post("/login", async (req, res, next) => {
  const user = {
    id: 1,
    username: "kazbag",
    email: "kaz@bag.pl",
  };
  jwt.sign({ user }, SECRET_KEY, (err, token) => {
    if (err) return res.sendStatus(403);
    res.json({
      token,
    });
  });
});

module.exports = api;
