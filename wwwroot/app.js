var hackGT = angular.module('hackGT', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: "Views/home.html",
    controller: "homeCtrl"
  })

  // .when('/account', {
  //   templateUrl: "Views/account.html",
  //   controller: "accountCtrl"
  // })

  .otherwise({
    redirectTo: "Views/home.html"
  });
});
hackGT.controller('homeCtrl', function ($scope, $http) {
  $scope.origin = "713 West Peachtree Street, NW Atlanta, GA 30308";
  $scope.dest = "6000 N. Terminal Pkwy Atlanta, GA";
  $scope.submit = function(){
    $http.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+
    $scope.origin+'&destinations='+$scope.dest+'&units=imperial&key=AIzaSyDL-MGKJtWzeahXLCujY24nValVsfALrqs&sensor=true')
    .success(function (response) {
      $scope.directions = response;
      $scope.co2 = (.0005*0.00062137*$scope.directions.rows[0].elements[0].distance.value*26.67)/38.92;
      $scope.money = (2.99*0.00062137*$scope.directions.rows[0].elements[0].distance.value)/38.92;
      $scope.emissions = "You reduce "+$scope.co2.toFixed(3)+" tons of CO2 per trip!";
      $scope.fuel = "You save $"+$scope.money.toFixed(2)+" on gas money per trip!"
      return response;
    });
  };
});
// hackGT.controller('accountCtrl', function accountCtrl ($scope) {

// });
// hackGT.factory('dirFactory', function ($http) {
//   var service = {
//     getData: getData,
//     directions: null
//   };
//
//   return service;
//
//   function getData() {
//     var origin = "713 West Peachtree Street, NW Atlanta, GA 30308";
//     var dest = "6000 N. Terminal Pkwy Atlanta, GA";
//     $http.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+
//     origin+'&destinations='+dest+'&units=imperial&key=AIzaSyDL-MGKJtWzeahXLCujY24nValVsfALrqs')
//     .success(function (response) {
//       service.directions = response;
//       return response;
//     });
//   }
// });
