'use strict';

/**
 * @ngdoc function
 * @name mesasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mesasApp
 */

 angular.module('mesasApp')
   .controller('MainCtrl', function ($scope,localStorageService) {
     var todosInStore = localStorageService.get('todos');

 $scope.todos = todosInStore || [];

 $scope.$watch('todos', function () {
   localStorageService.set('todos', $scope.todos);
 }, true);
     $scope.addTodo = function () {
       $scope.todos.push($scope.todo);
       $scope.todo = '';
     };
     $scope.removeTodo = function (index) {
  $scope.todos.splice(index, 1);
};
   });
