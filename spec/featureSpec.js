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

    it('cannot drop below 10 degrees', function() {
      for(var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

//     If power saving mode is on, the maximum temperature is 25 degrees

    it('Maximum temperature is 32 (when power saving is off)', function() {
      MAXIMUM_TEMPERATURE = thermostat.MAXIMUM_TEMPERATURE;
      expect(thermostat.powersaving).toBe(false);
      expect(MAXIMUM_TEMPERATURE).toEqual(32);
      for(var i = 0; i < 14; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(MAXIMUM_TEMPERATURE);
    });

    it('Maximum temperature is 25 (when power saving is on)', function() {
      thermostat.turnOnPowersaving();
      MAXIMUM_TEMPERATURE = thermostat.MAXIMUM_TEMPERATURE;
      expect(thermostat.powersaving).toBe(true);
      expect(MAXIMUM_TEMPERATURE).toEqual(25);
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(MAXIMUM_TEMPERATURE);
    });
  });
});
