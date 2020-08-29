const env = require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretkey";

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearedHeader = req.headers["authorization"];
  if (bearedHeader === undefined) return res.sendStatus(401);

  const bearerToken = bearedHeader.replace("Bearer ", "");

  jwt.verify(bearerToken, SECRET_KEY, (error, authData) => {
    if (error) return res.sendStatus(403);
    req.authData = authData;
    next();
  });
};

module.exports = verifyToken;
