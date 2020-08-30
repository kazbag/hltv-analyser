const users = require("express").Router();
const { encryptPassword, decryptPassword } = require("../middleware/bcrypt");
const UserModel = require("../models/UserModel");

users.get("/", async (req, res, next) => {
  const response = await UserModel.find().exec();
  res.send(response);
});

users.delete("/delete-all/", async (req, res) => {
  try {
    const allUsers = await UserModel.find().exec();
    allUsers.forEach((user) => UserModel.deleteOne({ _id: user._id }).exec());
    res.send(allUsers);
  } catch (err) {
    console.log(err);
  }
});

module.exports = users;
