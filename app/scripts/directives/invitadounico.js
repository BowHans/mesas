'use strict';

/**
 * @ngdoc directive
 * @name mesasApp.directive:invitadoUnico
 * @description
 * # invitadoUnico
 */
angular.module('mesasApp')
  .directive('invitadoUnico', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.invitadoUnico = function(modelValue, viewValue) {

        var unico = true;
        var invitados = scope.invitados;
        var invitado = invitados[0];

         for (invitado of invitados){

            if (viewValue!==null&&invitado.nombre.toUpperCase() === viewValue.toUpperCase())
              {unico=false;}
          }

          return unico;
        };
      }
    };
  });
