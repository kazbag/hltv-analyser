const env = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const PORT = process.env.API_PORT || 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connectDB = async () => {
  const dbURI =
    process.env.DATABASE_URI || "mongodb://localhost/hltv_database_dev";

  const settings = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  console.log("Trying to connect to mongodb [URI] ", { dbURI });

  try {
    const connection = await mongoose.connect(dbURI, settings);
    console.log("Mongoose connected");
    return connection;
  } catch (err) {
    console.log("MoongoDB not connected", err);
  }
  return null;
};

connectDB().then(() => {
  console.log("connected to db");
});

const matchesRoute = require("./routes/matches");
const teamsRoute = require("./routes/teams");

const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/matches", matchesRoute);
app.use("/teams", teamsRoute);

app.listen(PORT, () => console.log(`API started at: http://localhost:${PORT}`));
