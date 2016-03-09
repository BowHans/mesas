'use strict';

/**
 * @ngdoc service
 * @name mesasApp.invitadosFac
 * @description
 * # invitadosFac
 * Factory in the mesasApp.
 */
angular.module('mesasApp')
  .factory('invitadosFac', function (localStorageService) {
    var invitadosInStore = localStorageService.get('invitados');
    var invitados = invitadosInStore || [];
    function get() {
      return invitados;
    }

    function set(obj) {
      invitados=obj;
       localStorageService.set('invitados', invitados);
    }


    // Return the public API.
              return({
                  get: get,
                  set: set
              });
              // ---
              // PUBLIC METHODS.
              // ---



  });
