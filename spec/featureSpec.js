describe('Thermostat features', function() {

  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature by 1 degree with an up function', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
    });

  it('decreases temperature by 1 degree with a down function', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  describe('temperature limits', function() {

      var thermostat;
      beforeEach(function () {
        thermostat = new Thermostat();
      });

    it('cannot drop below 10 degrees', function() {
      for(var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });
});
