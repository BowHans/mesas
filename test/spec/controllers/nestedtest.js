'use strict';

describe('Controller: NestedtestCtrl', function () {

  // load the controller's module
  beforeEach(module('mesasApp'));

  var NestedtestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NestedtestCtrl = $controller('NestedtestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
