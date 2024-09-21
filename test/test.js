//const { type } = require("os");
const supertest = require("supertest");

var server = supertest.agent("http://localhost:5000");

describe("Unit test example: ", ()=> {
    it("home page expected", (done) => {
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200)
            .end(function(err, res){
                done();
            });
    });

});