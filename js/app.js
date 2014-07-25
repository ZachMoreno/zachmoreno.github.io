'use strict';


// Declare app level module which depends on filters, and services
angular.module('zm', [
  'ngRoute',
  'zm.filters',
  'zm.services',
  'zm.directives',
  'zm.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/journal', {
  	templateUrl: 'partials/journal.html', 
  	controller: 'MyCtrl1'
  });

  $routeProvider.when('/health', {
  	templateUrl: 'partials/health.html', 
  	controller: 'MyCtrl2'
  });

  $routeProvider.otherwise({redirectTo: '/journal'});
}]);
