var fs = require('fs');
var Q = require('q');
var cheerio = require('cheerio');
var fs_readFile = Q.denodeify(fs.readFile);

var ProjectRecordParser = require('../ProjectRecordParser');

describe('ProjectRecordParser', function () {
  var projectsHtmlFilePath = __dirname + "/Projecten.html";
  var projectsHtml = fs.readFileSync(projectsHtmlFilePath, "utf8");

  var sut;

  beforeEach(function () {
    sut = new ProjectRecordParser();
  });

  describe('#parse()', function () {
    it('should parse project records from the html', function (done) {
      var expectedProjects = [{
        projectName : "Dutch Dragon Fireworks",
        loanGoal : "Voorfinanciering voorraden",
        classification : "5s",
        graydonRating : "B",
        creditAmount : "€ 250.000",
        investedAmount : "€ 35.500",
        annualIntrest : "7,5%",
        period : "36 maanden"
      }];

      var actualRecords = sut.parse(projectsHtml);

      expectedProjects.should.deep.equal(actualRecords);
    });
  })
});