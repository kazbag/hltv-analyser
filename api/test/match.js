const env = require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const API = require("../main");
const API_URI = process.env.API_URI || "http://localhost:3001";
const DATABASE_URI =
  process.env.DATABASE_URI || "mongodb://localhost/hltv_database_dev";

var Mongoose = require("mongoose").Mongoose;
var mongoose = new Mongoose();

var MockMongoose = require("mock-mongoose").MockMongoose;
var mockMongoose = new MockMongoose(mongoose);

before(function (done) {
  mockMongoose.prepareStorage().then(function () {
    mongoose.connect(DATABASE_URI, function (err) {
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

describe("GET /matches/:id", () => {
  it("Should get specific match from HLTV by id", (done) => {
    const matchId = 2290762;
    chai
      .request(API_URI)
      .get("/matches/" + matchId)
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.a("object");
        response.body.should.have.property("id");
        response.body.should.have.property("format");
        done();
      });
  });
});

// describe;
