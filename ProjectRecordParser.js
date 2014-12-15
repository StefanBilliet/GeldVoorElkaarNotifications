var cheerio = require('cheerio');

module.exports = function ProjectRecordParser () {
  var self = this;

  self.parse = function parse (html) {
    var $ = cheerio.load(html);

    var projectNodes = $('.project');

    var projects = [].map.call(projectNodes, function (projectNode, zeroBasedIndex) {
      var oneBasedIndex = zeroBasedIndex + 1;
      var projectIndex = zeroBasedIndex.toString().length === 1 ? '0' + oneBasedIndex : oneBasedIndex;

      var htmlNode = $(projectNode);

      var projectName = htmlNode.find("#ctl00_ctl00_ctl00_ContentPlaceHolderDefault_MainContentPlaceHolder_ctl00_ProjectenFilter_4_Projectgegevens1_LeningRepeater_ctl" + projectIndex + "_ProjectInformatie1_ProjectNaamLabel").first().text();
      var loanGoal = htmlNode.find("#ctl00_ctl00_ctl00_ContentPlaceHolderDefault_MainContentPlaceHolder_ctl00_ProjectenFilter_4_Projectgegevens1_LeningRepeater_ctl" + projectIndex + "_ProjectInformatie1_LeendoelLabel").first().text();
      var classification = htmlNode.find("#ctl00_ctl00_ctl00_ContentPlaceHolderDefault_MainContentPlaceHolder_ctl00_ProjectenFilter_4_Projectgegevens1_LeningRepeater_ctl" + projectIndex + "_ProjectInformatie1_ClassificatieLabel").first().text();
      var graydonRating = htmlNode.find("#ctl00_ctl00_ctl00_ContentPlaceHolderDefault_MainContentPlaceHolder_ctl00_ProjectenFilter_4_Projectgegevens1_LeningRepeater_ctl" + projectIndex + "_ProjectInformatie1_GraydonRatingLabel").first().text();

      debugger;
      return {
        projectName : projectName,
        loanGoal : loanGoal,
        classification : classification,
        graydonRating : graydonRating
      };
    });

    return projects;
  };

  return self;
}