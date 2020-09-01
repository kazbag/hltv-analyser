const env = require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const API = require("../main");
const API_URI = process.env.API_URI || "http://localhost:3001";
const DATABASE_URI =
  process.env.TEST_DATABASE_URI || "mongodb://localhost/test_hltv_database";
const UserModel = require("../models/UserModel");
var Mongoose = require("mongoose").Mongoose;
var mongoose = new Mongoose();

var MockMongoose = require("mock-mongoose").MockMongoose;
var mockMongoose = new MockMongoose(mongoose);

before(function (done) {
  mockMongoose.prepareStorage().then(function () {
    mongoose.connect(DATABASE_URI, function (err) {
      UserModel.deleteMany().then((result) => {
        console.log("Cleaned Users/API database");
      });
      done(err);
    });
  });
});

// assertion style
chai.should();
chai.use(chaiHttp);

describe("POST /api/register", () => {
  it("Should be able to register user if not exists", (done) => {
    const testUser = {
      user: {
        email: "test@user.com",
        password: "testuser123",
      },
    };
    chai
      .request(API_URI)
      .post("/api/register")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });

  it("Shouldn't be able to register user if exists", (done) => {
    const testUser = {
      user: {
        email: "test@user.com",
        password: "anyotherpassword",
      },
    };
    chai
      .request(API_URI)
      .post("/api/register")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(409);
        done();
      });
  });
});

describe("POST /api/login", () => {
  it("Shouldn't be able to login if bad login and password provided", (done) => {
    const testUser = {
      user: {
        email: "test_non_existing@user.com",
        password: "nonexistingpassword",
      },
    };
    chai
      .request(API_URI)
      .post("/api/login")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(500);
        done();
      });
  });

  it("Should be able to login test user and receive token", (done) => {
    const testUser = {
      user: {
        email: "test@user.com",
        password: "testuser123",
      },
    };
    chai
      .request(API_URI)
      .post("/api/login")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("token");
        done();
      });
  });

  it("Shouldn't be able to login if bad login provided", (done) => {
    const testUser = {
      user: {
        email: "test_non_existing@user.com",
        password: "password123",
      },
    };
    chai
      .request(API_URI)
      .post("/api/login")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(500);
        done();
      });
  });

  it("Shouldn't be able to login if bad password provided", (done) => {
    const testUser = {
      user: {
        email: "test@user.com",
        password: "badpassword123",
      },
    };
    chai
      .request(API_URI)
      .post("/api/login")
      .send(testUser)
      .end((err, response) => {
        response.should.have.status(401);
        done();
      });
  });
});
