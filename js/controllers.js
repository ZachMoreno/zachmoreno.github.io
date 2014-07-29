'use strict';

/* Controllers */

angular.module('zm.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {

  }])


  .controller('journalCtrl', ['$scope', 'recentPostsFactory', function($scope, recentPostsFactory) {
    $scope.clearData = function() {
      $scope.recentPosts = {};
    };

    $scope.getData = (function() {
      // Call the async method and then do stuff with what
      // is returned inside our own then function
      recentPostsFactory.async().then(function(promisedData) {
        $scope.recentPosts = promisedData;
      });
    }()); // fire away
  }])


  .controller('healthCtrl', ['$scope', function($scope) {

  }])


  .controller('folioCtrl', ['$scope', function($scope) {

  }])
  

  .controller('aboutCtrl', ['$scope', function($scope) {

  }]);
