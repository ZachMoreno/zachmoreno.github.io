'use strict';


// Declare app level module which depends on filters, and services
angular.module('zm', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'firebase',
  'ui.codemirror',
  // 'ngFluidvids',
  'zm.filters',
  'zm.services',
  'zm.directives',
  'zm.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
  	templateUrl: 'partials/home.html', 
  	controller: 'homeCtrl'
  });

  $routeProvider.when('/journal', {
  	templateUrl: 'partials/journal.html', 
  	controller: 'journalCtrl'
  });

  $routeProvider.when('/health', {
  	templateUrl: 'partials/health.html', 
  	controller: 'healthCtrl'
  });

  $routeProvider.when('/folio', {
    templateUrl: 'partials/folio.html', 
    controller: 'folioCtrl'
  });

  $routeProvider.when('/about', {
  	templateUrl: 'partials/about.html', 
  	controller: 'aboutCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/home'});

  // $locationProvider.html5Mode('true');
}])

.run(function(){
  fluidvids.init({
    selector: ['iframe', 'object'], // runs querySelectorAll()
    players: ['www.youtube.com', 'player.vimeo.com'] // players to support
  });
});
