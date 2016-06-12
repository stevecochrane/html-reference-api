var assert  = require("chai").assert;
var http    = require("http");
var restler = require("restler");

describe("API Tests", function() {

    var element = {
        "name": "test",
        "description": "This is a element added by the API Test suite."
    };

    var baseUrl = "http://localhost:3000";

    it("Should be able to add a new element", function(done) {
        restler.post(baseUrl + "/api/elements", { "data": element }).on("success", function(data) {
            assert.isDefined(data.id, "data.id is defined");
            done();
        });
    });

    it("Should be able to retrieve an element", function(done) {
        restler.post(baseUrl + "/api/elements", { "data": element }).on("success", function(data) {
            assert.isDefined(data.id, "data.id is defined");
            restler.get(baseUrl + "/api/element/" + data.id).on("success", function(data) {
                assert(data.name === element.name, "New element name is consistent with what was submitted");
                assert(data.description === element.description, "New element description is consistent with what was submitted");
                done();
            });
        });
    });

});
