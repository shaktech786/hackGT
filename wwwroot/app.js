var hackGT = angular.module('hackGT', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: "Views/home.html",
    controller: "homeCtrl"
  })

  .when('/account', {
    templateUrl: "Views/account.html",
    controller: "accountCtrl"
  })

  .otherwise({
    redirectTo: "Views/home.html"
  });
});
hackGT.controller('homeCtrl', ['$scope', 'dirFactory', function ($scope, dirFactory) {
  if (dirFactory.service.directions != null) {
    $scope.directions = dirFactory.service.directions;
  } else {
    $scope.directions = dirFactory.service.getData;
  }
}]);
// hackGT.controller('accountCtrl', function accountCtrl ($scope) {

// });
hackGT.factory('dirFactory', function ($http) {
  var service = {
    getData: getData,
    directions: null
  };

  return service;

  function getData() {
    $http.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyDAeGEUraKxK8Le140slXlIiC_sogId89M&callback=initMap')
    .success(function (response) {
      service.directions = response;
      return response;
    });
  }
});
