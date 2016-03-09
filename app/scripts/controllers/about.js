'use strict';

/**
 * @ngdoc function
 * @name mesasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mesasApp
 */
angular.module('mesasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
