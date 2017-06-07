describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // it('increases temperature by x function', function() {
  //   expect(thermostat.increaseTemperatureBy(5)).toEqual(25);
  // });

  it('increases temperature by 1 degree with an up function', function() {
    expect(thermostat.up()).toEqual(21);
    expect(thermostat.up()).toEqual(22);
    expect(thermostat.up()).toEqual(23);
  });

  it('decreases temperature by 1 degree with a down function', function() {
    expect(thermostat.down()).toEqual(19);
    expect(thermostat.down()).toEqual(18);
    expect(thermostat.down()).toEqual(17);
  });

  describe('temperature limits', function() {
    var thermostat;
    beforeEach(function() {
      thermostat = new Thermostat();
    });
    it('cannot drop below 10 degrees', function() {
      var times = 10;
      for(var i=0; i < 9; i++) {
        thermostat.down();
      }
      expect(thermostat.down()).toEqual(10);
    });
  });
});
