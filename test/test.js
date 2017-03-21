const supertest = require("supertest");
const should = require("should");
const server = supertest.agent("http://localhost:4012");

// UNIT test begin

describe("Marco Polo unit test",function(){


  it("should return array equal to our test array",function(done){


    server
    .get("/calculate/marcopolo?limit=30")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){

      var requiredRes= [1,2,3,"marco",5,6,"polo","marco",9,10,11,"marco",13,"polo",15,"marco",17,18,19,"marco","polo",22,23,"marco",25,26,27,"marcopolo",29,30];

      res.body.last.should.eql(requiredRes);
      done();
    });
  });

  it("should not block cpu for long run max limit 7.5min",function(done){

   this.timeout(750000);
    server
    .get("/calculate/marcopolo")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      done();
    });
  });

  it("should not take much time(<2sec)for subsequent request due to singleton pattern",function(done){

   this.timeout(2000);
    server
    .get("/calculate/marcopolo")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){

    
      done();
    });
  });

});