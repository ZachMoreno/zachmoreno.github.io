'use strict';

angular.module('zm', [
	'ngRoute',
	'zm.config',
	'zm.services',
	'zm.controllers'
]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/journal', {
		templateURL : 'views/journal.html',
		controller  : 'journalCtrl'
	});

	$routeProvider.when('/health', {
		templateURL : 'views/health.html',
		controller  : 'healthCtrl'
	});

	$routeProvider.when('/folio', {
		templateURL : 'views/folio.html',
		controller  : 'folioCtrl'
	});

	$routeProvider.when('/about' {
		templateURL : 'views/about.html',
		controller  : 'aboutCtrl'
	});
}]);