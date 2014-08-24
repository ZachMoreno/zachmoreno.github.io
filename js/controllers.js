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
    // var mainCard = document.getElementById("mainCard");
    // mainCard.setAttribute("class", "col-9-12 inPlace flip-card-container");


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

        // feedback
        $scope.feedback = "Successfully saved post";
      }
    }

    $scope.editPost = function(id) {
      $scope.editedPost = $scope.posts[id];
      console.log($scope.editedPost);

      $scope.originalPost = angular.extend({}, $scope.editedPost);
    }

    $scope.doneEditing = function (id) {
      $scope.editedPost = null;
      var title    = $scope.posts[id].title.trim(),
          content  = $scope.posts[id].content.trim(),
          status   = $scope.posts[id].status.trim(),
          dateTime = Number(new Date());

      if (title, content, status, dateTime) {
        $scope.posts.$save(id);
        $scope.feedback = "Successfully updated post";
      } else {
        $scope.removePost(id);
      }
    };

    $scope.clearPost = function() {
      // clean up
      $scope.newPost.title = "";
      $scope.newPost.content = "";
      $scope.newPost.status = "";
      $scope.editPost.title = "";
      $scope.editPost.content = "";
      $scope.editPost.status = "";
    }

    // CodeMirror config
    $scope.editorConfig = {
      value : 'Content in HTML',
      lineWrapping : true,
      lineNumbers : true,
      mode : 'text/html',
      theme : 'default'
    };
  }])


  .controller('healthCtrl', ['$scope', function($scope) {

  }])


  .controller('folioCtrl', ['$scope', function($scope) {

  }])
  

  .controller('aboutCtrl', ['$scope', function($scope) {

  }]);
