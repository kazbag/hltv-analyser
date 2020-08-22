const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  event: Object,
  id: Number,
  live: Boolean,
  stars: Number,
  team1: Object,
  team2: Object,
});

const Match = mongoose.model("match", matchSchema);

module.exports = Match;
