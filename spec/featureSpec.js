describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('default temperature is 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
});
