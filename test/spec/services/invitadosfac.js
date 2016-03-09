'use strict';

describe('Service: invitadosFac', function () {

  // load the service's module
  beforeEach(module('mesasApp'));

  // instantiate service
  var invitadosFac;
  beforeEach(inject(function (_invitadosFac_) {
    invitadosFac = _invitadosFac_;
  }));

  it('should do something', function () {
    expect(!!invitadosFac).toBe(true);
  });

});
