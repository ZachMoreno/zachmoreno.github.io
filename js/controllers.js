'use strict';

/* Controllers */

angular.module('zm.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {

  }])


  .controller('journalCtrl', ['$scope', 'recentPostsFactory', '$firebase', function($scope, recentPostsFactory, $firebase) {
    // wp/api
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


    // only apply .flip-card-container to journal view
    var mainCard = document.getElementById("mainCard");
    mainCard.setAttribute("class", "col-9-12 inPlace flip-card-container");


    // Firebase
    var journalRef = new Firebase("https://zachmoreno.firebaseio.com/posts");
    $scope.posts = $firebase(journalRef);

    $scope.addPost = function() {
      if($scope.newPost.title
         && $scope.newPost.content
         && $scope.newPost.status) {
        // only $add if all required fields have values
        $scope.posts.$add ({
          title    : $scope.newPost.title,
          content  : $scope.newPost.content,
          status   : $scope.newPost.status,
          dateTime : Number(new Date())
        });

        // clean up
        $scope.newPost.title = "";
        $scope.newPost.content = "";
        $scope.newPost.status = "";
      }
    }

    $scope.clearPost = function() {
        // clean up
        $scope.newPost.title = "";
        $scope.newPost.content = "";
        $scope.newPost.status = "";
    }
  }])


  .controller('healthCtrl', ['$scope', function($scope) {

  }])


  .controller('folioCtrl', ['$scope', function($scope) {

  }])
  

  .controller('aboutCtrl', ['$scope', function($scope) {

  }]);
