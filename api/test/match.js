const env = require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const API = require("../main");
const API_URI = process.env.API_URI || "http://localhost:3001";
const DATABASE_URI =
  process.env.TEST_DATABASE_URI || "mongodb://localhost/test_hltv_database";
const MatchesModel = require("../models/MatchModel");

var Mongoose = require("mongoose").Mongoose;
var mongoose = new Mongoose();

var MockMongoose = require("mock-mongoose").MockMongoose;
var mockMongoose = new MockMongoose(mongoose);

before(function (done) {
  mockMongoose.prepareStorage().then(function () {
    mongoose.connect(DATABASE_URI, function (err) {
      MatchesModel.deleteMany().then((result) => {
        console.log("Cleaned Matches database");
      });
      done(err);
    });
  });
});
// assertion style
chai.should();
chai.use(chaiHttp);

// Test GET all matches

describe("GET /matches", () => {
  it("Should get all available the matches from HLTV (at least 1)", (done) => {
    chai
      .request(API_URI)
      .get("/matches")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.an("array");
        response.body.length.should.be.greaterThan(0);
        done();
      });
  });
});

// Test GET match by id

describe("GET /matches/match/:id", () => {
  it("Should get specific match from HLTV by id", (done) => {
    const matchId = 2290762;
    chai
      .request(API_URI)
      .get("/matches/match/" + matchId)
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.a("object");
        response.body.should.have.property("team1");
        done();
      });
  });
});

describe("POST /matches/user-matches", () => {
  it("Should add a match into user favourites", (done) => {
    const matchData = {
      id: 2343602,
      team1: { name: "Natus Vincere", id: 4608 },
      team2: { name: "GODSENT", id: 6902 },
      event: { name: "ESL Pro League Season 12 Europe", id: 5372 },
      format: "bo3",
      stars: 5,
      live: true,
    };
    chai
      .request(API_URI)
      .post("/matches/user-matches")
      .send(matchData)
      .end((err, response) => {
        console.log("xxx");
        console.log(matchData);
        response.should.have.status(200);
        done();
      });
  });
});
// describe("GET /matches/user-matches", ()=>{
//   it("Should get user matches", (done)=>{
//     done();
//   })
// })

// describe;
