describe('thermostat', function() {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  describe('has default temperature', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
});
