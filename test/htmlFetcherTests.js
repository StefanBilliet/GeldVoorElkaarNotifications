var phantom = require('phantom');
var fs = require('fs');
var Q = require('q');
var fs_readFile = Q.denodeify(fs.readFile);

var should = require('chai').should();

var HtmlFetcher = require('../htmlFetcher')

describe('HtmlFetcher', function(){
  var filePath = "file:///" + __dirname + "/InputHtml.html"
  var normalPath = __dirname + "/InputHtml.html"
  var sut;

  beforeEach(function () {
    sut = new HtmlFetcher();
  });

  describe('#fetch()', function(){
    it('should return the full html of the page', function(done){
      var expectedInnerHtml = fs.readFileSync(normalPath, "utf8");

      sut.fetch(filePath).done(function (actualInnerHtml) {
        expectedInnerHtml.should.equal(actualInnerHtml);

        done();
      });
    });
  });
});