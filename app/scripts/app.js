'use strict';

/**
 * @ngdoc overview
 * @name mesasApp
 * @description
 * # mesasApp
 *
 * Main module of the application.
 */
angular
  .module('mesasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    ,'dndLists'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/invitados', {
        templateUrl: 'views/invitados.html',
        controller: 'InvitadosCtrl'
      })
      .when('/grupos', {
        templateUrl: 'views/grupos.html',
        controller: 'GruposCtrl'
      })
      .when('/nestedTest', {
        templateUrl: 'views/nestedtest.html',
        controller: 'SimpleDemoController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
