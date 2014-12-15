var HtmlFetcher = require('./HtmlFetcher');
var Q = require('q');
debugger;
var fetcher = new HtmlFetcher();

fetcher.fetch("http://www.geldvoorelkaar.nl/geld-investeren/projecten.aspx")
  .done(function (html) {
  console.log(html);
});
