var request = require('request');
var Q = require('q');

module.exports = function HtmlFetcher () {
  var self = this;

  self.fetch = function fetch (url) {
    var deferred = Q.defer();

    request(url, function (error, response, body) {debugger;
      if (!error && response.statusCode == 200) {
        deferred.resolve(body);
      } else {
        deferred.reject(error);
      }
    });

    return deferred.promise;
  };

  return self;
}