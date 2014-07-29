'use strict';

/* Services */

angular.module('zm.services', [])

	.factory('recentPostsFactory', function($http) {
		var promise;
		var recentPostsFactory = {
			async: function() {
				if ( !promise ) {
					// $http returns a promise,
					// which has a then function,
					// which also returns a promise
					promise = $http.get('http://zachariahmoreno.com/api/get_recent_posts').then(function (response) {
						// The then function here is an
						// opportunity to modify the response
						console.log(response);
						// The return value gets picked up by
						// the then in the controller.
						return response.data;
					});
				}
				// Return the promise to the controller
				return promise;
			}
		};
		return recentPostsFactory;
	});