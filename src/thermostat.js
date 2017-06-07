"use strict";

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperatureBy = function(increaseBy) {
    return this.temperature + increaseBy;
  };

  Thermostat.prototype.up = function() {
    return this.temperature += 1;
  };

  Thermostat.prototype.isMinumumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      this.temperature = 10;
    }
  };
};
