var express = require('../'),
    http = require('http'),
    request = require('supertest');

describe("app", function() {

  describe("create http server", function() {
    var server = http.createServer(express());

    it('should responds to /foo with 404', function(done) {
      request(server).get("/foo").expect(404).end(done);
    });
  });

  describe("#listen", function() {
    before(function(done) {
      var app = express();
      app.listen(7000, done);
    });

    it('should responds to /foo with 404', function(done) {
      request("http://localhost:7000")
          .get("/foo")
          .expect(404)
          .end(done);
    });
  });

});
