describe('thermostat', function() {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('has default temperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('should increase temperature by amount', function() {
    expect(thermostat.increaseTemperatureBy(1)).toEqual(21);
    expect(thermostat.increaseTemperatureBy(10)).toEqual(30);
  });

  it('should increase temperature by 1', function() {
    expect(thermostat.up()).toEqual(21);
  });
});
