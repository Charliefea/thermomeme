"use strict";

function Thermostat() {
  this.temperature = 20;

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperatureBy = function(increaseBy) {
    return this.temperature + increaseBy;
  };

  Thermostat.prototype.up = function() {
    return this.temperature += 1;
  };
}
