describe('thermostat', function() {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it('has default temperature', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
