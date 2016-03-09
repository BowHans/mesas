'use strict';

/**
 * @ngdoc directive
 * @name mesasApp.directive:focusMe
 * @description
 * # focusMe
 */
angular.module('mesasApp')
.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.focusMe, function(value) {
        if(value === true) {
          console.log('value=',value);
          $timeout(function() {
            element[0].focus();
            scope[attrs.focusMe] = false;
          });
        }
      });
    }
  };
});
