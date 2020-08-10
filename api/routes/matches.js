const matches = require("express").Router();
const { HLTV } = require("hltv");
const myHLTV = HLTV.createInstance({ loadPage: (url) => fetch(url) });

matches.get("/", async (req, res, next) => {
  const response = await HLTV.getMatches();
  res.json(response);
});

module.exports = matches;
