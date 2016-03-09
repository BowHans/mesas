'use strict';

describe('Controller: InvitadosCtrl', function () {

  // load the controller's module
  beforeEach(module('mesasApp'));

  var InvitadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvitadosCtrl = $controller('InvitadosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
