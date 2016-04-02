angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function () {
    Links.getAll()
      .then(function(links) {
        sortLinks(links);
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.liveSearchQuery = '';

  var sortLinks = function (links) {
    links.sort(function (a, b) {
      return b.visits - a.visits;
    });
  };

  $scope.getAll();
});
