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

describe("GET /teams/ranking", () => {
  it("Should be able to get top 30 teams", (done) => {
    chai
      .request(API_URI)
      .get("/teams/ranking")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("array");
        response.body.should.have.length(30);
        done();
      });
  });
});
