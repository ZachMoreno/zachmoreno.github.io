'use strict';

/* Directives */


angular.module('zm.directives', [])
  .directive('postcard', function() {
    return {
      templateUrl: 'partials/postcard.html'
    };
  });
