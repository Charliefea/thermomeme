"use strict";

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.powersaving = true;

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };
  Thermostat.prototype.firstTemperature = function(temp) {
    this.temperature = temp;
  };

  Thermostat.prototype.isAboveMinimumTemperature = function() {
    return this.temperature > this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isBelowMaximumTemperature = function() {
    return this.temperature < this.MAXIMUM_TEMPERATURE;
  };

  Thermostat.prototype.turnOnPowersaving = function() {
    this.MAXIMUM_TEMPERATURE = 25;
    this.powersaving = true;
  };

  Thermostat.prototype.turnOffPowersaving = function() {
    this.MAXIMUM_TEMPERATURE = 32;
    this.powersaving = false;
  };

  Thermostat.prototype.switchPowersaving = function() {
    if(this.powersaving) {
      this.turnOffPowersaving();
    } else {
      this.turnOnPowersaving();
    }

  };


  Thermostat.prototype.isPowersavingOn = function() {
    return this.powersaving;
  };

  Thermostat.prototype.energyUsage = function() {
    if(this.temperature < 18) {
      return 'low-usage';
    } else if(this.temperature < 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

  Thermostat.prototype.up = function() {
    if(this.isBelowMaximumTemperature()) {
      this.temperature += 1;
      return this;
    } else {
      this.temperature = this.MAXIMUM_TEMPERATURE;
      return this;
    }
  };

  Thermostat.prototype.down = function() {
    if(this.isAboveMinimumTemperature()) {
      return this.temperature -= 1;
    } else {
      this.temperature = 10;
    }
  };
}
