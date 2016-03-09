'use strict';

describe('Directive: invitadoUnico', function () {

  // load the directive's module
  beforeEach(module('mesasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<invitado-unico></invitado-unico>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the invitadoUnico directive');
  }));
});
