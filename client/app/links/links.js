angular.module('shortly.links', ['ngRoute'])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function () {
    Links.getAll()
      .then(function(links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // $scope.routeToShorten = function($location) {
  //   $location.path('/shorten');
  // };

  $scope.getAll();
});
