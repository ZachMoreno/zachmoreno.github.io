'use strict';

/* Directives */


angular.module('zm.directives', [])
  .directive('zm-posts', function() {
    return {
      templateUrl: 'partials/zm-posts.html'
    };
  })

  .directive('fluidvids', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            video: '@'
        },
        template: '<div class="fluidvids">' +
                    '<iframe ng-src="{{ video }}"></iframe>' +
                  '</div>',
        link: function (scope, element, attrs) {
            var ratio = (attrs.height / attrs.width) * 100;
            element[0].style.paddingTop = ratio + '%';
        }
    };
});
