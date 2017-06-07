describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
