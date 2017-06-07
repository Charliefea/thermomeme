describe('thermostat', function() {

  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('has default temperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('should increase temperature by 1', function() {
    thermostat.up().up().up();
    expect(thermostat.temperature).toEqual(23);
  });

  it('should decrease temperature by 1', function() {
    expect(thermostat.down()).toEqual(19);
  });

  it('has a MINIMUM_TEMPERATURE of 10', function() {
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });
});
