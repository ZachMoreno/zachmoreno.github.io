'use strict';

/* Directives */


angular.module('zm.directives', [])
  .directive('postcard', function() {
    return {
      templateUrl: 'partials/postcard.html'
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
