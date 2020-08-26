const MatchesModel = require("../models/MatchModel");
const matches = require("express").Router();
const { HLTV } = require("hltv");

matches.get("/", async (req, res, next) => {
  const response = await HLTV.getMatches();
  res.json(response);
});

matches.get("/user-matches", async (req, res, next) => {
  try {
    console.log("log");
    const allMatches = await MatchesModel.find().exec();
    res.send(allMatches);
  } catch (err) {
    res.status(500).send(err);
  }
});

matches.post("/user-matches", async (req, res, next) => {
  console.log(req.body);
  const { event, id, live, stars, team1, team2 } = req.body.matchData || {};
  const newUserMatch = new MatchesModel({
    event,
    id,
    live,
    stars,
    team1,
    team2,
  });
  try {
    const savedNewUserMatch = await newUserMatch.save();
    res.send(savedNewUserMatch);
  } catch (err) {
    res.status(500).send(err);
  }
});

matches.delete("/user-matches/:id", async (req, res, next) => {
  try {
    const deletedUserMatch = await MatchesModel.deleteOne({
      _id: req.params.id,
    }).exec();
    res.json(deletedUserMatch);
  } catch (err) {
    res.status(500).send(err);
  }
});

matches.delete("/user-matches-all/", async (req, res) => {
  try {
    const allMatches = await MatchesModel.find().exec();
    allMatches.forEach((match) =>
      MatchesModel.deleteOne({ _id: match._id }).exec()
    );
    res.send(allMatches);
  } catch (err) {
    console.log(err);
  }
});

module.exports = matches;
