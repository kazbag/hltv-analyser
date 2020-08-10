const env = require("dotenv").config();
const path = require("path");
const PORT = process.env.API_PORT || 3001;

const matchesRoute = require("./routes/matches");

const express = require("express");
const app = express();

app.set("view-engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/matches", matchesRoute);

app.listen(PORT, () => console.log(`API started at: http://localhost:${PORT}`));
