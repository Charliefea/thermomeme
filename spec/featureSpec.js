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

    it('Maximum temperature is 32 (when power saving is off)', function() {
      thermostat.turnOffPowersaving();
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

    it('powersaving is on by default', function() {
      expect(thermostat.powersaving).toBe(true);
    });

    // You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

    describe('Energy usage', function () {

      it('should display energy usage of thermostat', function () {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
        for(var i = 0; i < 5; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
        for(var x = 0; x < 11; x++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
