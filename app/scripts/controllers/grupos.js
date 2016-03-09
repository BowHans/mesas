'use strict';

/**
 * @ngdoc function
 * @name mygrupoApp.controller:GruposCtrl
 * @description
 * # GruposCtrl
 * Controller of the mygrupoApp
 */
angular.module('mesasApp')
  .controller('GruposCtrl', function ($scope,localStorageService,invitadosFac) {
    var gruposInStore = localStorageService.get('grupos');
      var gruposIndexInStore = localStorageService.get('gruposIndex');
$scope.invitados = invitadosFac.get();
 $scope.grupos = gruposInStore ||[];
 $scope.gruposIndex = gruposIndexInStore || -1;
 //Drag and drop model

 $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    $scope.list=  $scope.models.lists.A;

 $scope.$watch('grupos', function () {
  localStorageService.set('grupos', $scope.grupos);
 }, true);

 $scope.$watch('gruposIndex', function () {
  localStorageService.set('gruposIndex', $scope.gruposIndex);
 }, true);


    $scope.addGrupo = function () {

      $scope.grupo.index=+ $scope.gruposIndex;
      $scope.grupos.push($scope.grupo);
      $scope.grupo = '';

      $scope.grupoForm.$setUntouched();
    };
    $scope.removeGrupo = function (index) {
 $scope.grupos.splice(index, 1);
 };

 $scope.editaGrupo = function (index) {

   $scope.grupo = $scope.grupos[index];
   $scope.removeGrupo(index);
};

  });
