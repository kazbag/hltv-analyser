const MatchesModel = require("../models/MatchModel");
const matches = require("express").Router();
const { HLTV } = require("hltv");
const { handleUserFavouriteMatch } = require("../middleware/validation");
matches.get("/", async (req, res, next) => {
  const response = await HLTV.getMatches();
  res.json(response);
});

matches.get("/match/:id", async (req, res, next) => {
  const matchId = req.params.id;
  const response = await HLTV.getMatch({ id: matchId });
  res.json(response);
});

matches.get("/user-matches", async (req, res, next) => {
  try {
    const allMatches = await MatchesModel.find().exec();
    res.send(allMatches);
  } catch (err) {
    res.status(500).send(err);
  }
});

matches.post("/user-matches", async (req, res, next) => {
  const { error } = handleUserFavouriteMatch(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { event, id, team1, team2 } = req.body;
  const newUserMatch = new MatchesModel({
    id,
    event,
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
    const matchId = req.params.id;
    const deletedUserMatch = await MatchesModel.deleteOne({
      id: matchId,
    }).exec();
    res.status(200).send(`Match ${matchId} has been deleted successfully`);
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
