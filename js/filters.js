'use strict';

/* Filters */

angular.module('zm.filters', [])
  // .filter('interpolate', ['version', function(version) {
  //   return function(text) {
  //     return String(text).replace(/\%VERSION\%/mg, version);
  //   };
  // }])
	
	.filter('html', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsHtml(val);
		}
	}]);
