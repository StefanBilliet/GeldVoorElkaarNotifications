var phantom = require('phantom');
var Q = require('q');

module.exports = function HtmlFetcher () {
  var self = this;

  self.fetch = function fetch (url) {
    var deferred = Q.defer();

    phantom.create(function (ph) {
      ph.createPage(function (page) {
        page.open(url, function (status) {
           page.evaluate(function () {
            var html = document.documentElement.outerHTML
            return html

           }, function (actualHtml) {
            ph.exit();
            deferred.resolve(actualHtml);
          });
        });
      });
    });

    return deferred.promise;
  };

  return self;
}