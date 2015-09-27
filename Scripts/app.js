if (Meteor.isClient) {
  (function () {
    'use strict';

    angular.module("hackGT",["ngRoute"]).config(function ($routeProvider) {
      $routeProvider

        .when('/home', {
          templateUrl: "views/home.html",
          controller: "homeCtrl"
        })

        .when('/account', {
          templateUrl; "views/account.html",
          controller: "accountCtrl"
        })

        .otherwise({
          redirectTo: "views/home.html"
        });
    });
  })();
}
