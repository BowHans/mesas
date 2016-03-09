'use strict';

/**
 * @ngdoc function
 * @name myinvitadoApp.controller:InvitadosCtrl
 * @description
 * # InvitadosCtrl
 * Controller of the myinvitadoApp
 */
angular.module('mesasApp')
  .controller('InvitadosCtrl', function ($scope,localStorageService,invitadosFac) {

$scope.invitados = invitadosFac.get();

$scope.$watch('invitados', function () {
 invitadosFac.set( $scope.invitados);
}, true);


    $scope.addInvitado = function () {
      $scope.invitados.push($scope.invitado);
      $scope.invitado = '';

      $scope.focusNombre=true;
      $scope.invitadoForm.$setUntouched();
    };
    $scope.removeInvitado = function (index) {
 $scope.invitados.splice(index, 1);
 };

 $scope.editaInvitado = function (index) {

   $scope.invitado = $scope.invitados[index];
   $scope.removeInvitado(index);
};

$scope.orderInvitadosNombre = function (asc) {
if(asc){
  $scope.invitados.sort(comparaInvitadosNombre);
  $scope.ordenInvitados='NombreAsc';
  }
else {
    $scope.invitados.sort(comparaInvitadosNombreDesc);
    $scope.ordenInvitados='NombreDesc';
}

};

 function comparaInvitadosNombre(a,b) {
  var orden=0;
  if (a.nombre.toUpperCase() < b.nombre.toUpperCase()){
    orden = -1;
  }
    else if (a.nombre.toUpperCase() > b.nombre.toUpperCase()){
      orden = 1;
    }

  return orden;

}

function comparaInvitadosNombreDesc(a,b) {
 var orden = 0;
 if (a.nombre.toUpperCase() < b.nombre.toUpperCase()){orden = 1;}

   else if (a.nombre.toUpperCase() > b.nombre.toUpperCase()){orden = -1;}

 return orden;

}


$scope.orderInvitadosEdad = function (asc) {
if(asc){
  $scope.invitados.sort(comparaInvitadosEdad);
  $scope.ordenInvitados='EdadAsc';
  }
else {
    $scope.invitados.sort(comparaInvitadosEdadDesc);
    $scope.ordenInvitados='EdadDesc';
}

};

 function comparaInvitadosEdad(a,b) {
  var orden=0;
  if (a.edad < b.edad){orden = -1;}

    else if (a.edad > b.edad){orden = 1;}



  return orden;

}

function comparaInvitadosEdadDesc(a,b) {
 var orden = 0;
 if (a.edad < b.edad){orden = 1;}

   else if (a.edad > b.edad){orden = -1;}

 return orden;

}

  });
