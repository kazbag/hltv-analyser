const teams = require("express").Router();
const { HLTV } = require("hltv");
const TEAM_URI = "https://hltv.org/team/";

teams.get("/:id", async (req, res, next) => {
  const response = await HLTV.getTeam({ id: req.params.teamId });
  res.send(response);
});

teams.get("/ranking", async (req, res, next) => {
  const response = await HLTV.getTeamRanking();
  res.send(response);
});

module.exports = teams;
