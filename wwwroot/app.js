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
hackGT.controller('homeCtrl', function homeCtrl ($scope) {
  $scope.test="hello";
});
hackGT.controller('accountCtrl', function accountCtrl ($scope) {
  $scope.test2="bye";
});
