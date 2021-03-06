const env = require("dotenv").config();
const PASSWORD_HASH =
  process.env.PASSWORD_HASH ||
  "You'll need to provide password hash in your .env file";

const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const decryptPassword = async (encryptedPassword, userPassword) => {
  const validPassword = await bcrypt.compare(encryptedPassword, userPassword);
  return validPassword ? true : false;
};

module.exports.encryptPassword = encryptPassword;
module.exports.decryptPassword = decryptPassword;
