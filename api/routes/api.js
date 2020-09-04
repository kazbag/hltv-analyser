const env = require("dotenv").config();
const jwt = require("jsonwebtoken");
const api = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretkey";
const UserModel = require("../models/UserModel");
const { encryptPassword, decryptPassword } = require("../middleware/bcrypt");

api.post("/test-auth", verifyToken, (req, res, next) => {
  if (req.authData === undefined) return res.sendStatus(400);
  const { user } = req.authData;
  user ? res.json(user) : res.sendStatus(403);
});

api.post("/login", async (req, res, next) => {
  try {
    const user = req.body.user;
    const { email, password } = user;
    const userInDatabase = await UserModel.findOne({ email: email }).exec();

    if (userInDatabase.length === 0) {
      return res.send("User doesn't exist in database.");
    }

    const isPasswordValid = await decryptPassword(
      password,
      userInDatabase.password
    );

    if (isPasswordValid) {
      jwt.sign({ user }, SECRET_KEY, (err, token) => {
        if (err) return res.sendStatus(403);
        res.json({
          token,
          user: {
            email: user.email,
          },
        });
      });
    } else {
      res.status(401).send("Invalid password");
    }
  } catch (err) {
    res.status(500).send("Can't login user, due the internal error.");
  }
});

api.post("/register", async (req, res, next) => {
  const { email, password } = req.body.user;
  const isUserAlreadyRegistered = await UserModel.find({ email: email });
  if (isUserAlreadyRegistered.length > 0) {
    return res
      .status(409)
      .send(`User with email ${email} is already registered`);
  }
  const hashedPassword = await encryptPassword(password);
  const newUser = new UserModel({
    email,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).send("You have been registered!");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = api;
