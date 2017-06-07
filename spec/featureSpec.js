describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with an up function', function() {
    expect(thermostat.increaseTemperatureBy(5)).toEqual(25);
  });

  it('increases temperature by 1 degree', function() {
    expect(thermostat.up()).toEqual(21);
    expect(thermostat.up()).toEqual(22);
    expect(thermostat.up()).toEqual(23);
  });
});
