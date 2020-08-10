const env = require("dotenv").config();
const PORT = process.env.API_PORT || 3001;

const matchesRoute = require("./routes/matches");

const express = require("express");
const app = express();

app.use("/matches", matchesRoute);

app.get("/", (req, res) => res.send("Hello API!"));

app.listen(PORT, () => console.log(`API started at: http://localhost:${PORT}`));
