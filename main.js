var HtmlFetcher = require('./HtmlFetcher');
var ProjectRecordParser = require('./ProjectRecordParser');
var Q = require('q');

var fetcher = new HtmlFetcher();
var parser = new ProjectRecordParser();

fetcher.fetch("http://www.geldvoorelkaar.nl/geld-investeren/projecten.aspx")
  .done(function (html) {
    var records = parser.parse(html);
    console.log(records);
});
