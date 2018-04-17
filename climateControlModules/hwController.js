var hwComponent = require('./hwComponent');

class HWController{
  constructor(){
    this.hwComponents = [];
    this.numZones = 3;
  }

  buildHWComponentList(){
    for (var i = 0; i < this.numZones; i++){
      var tempSensor = new hwComponent(String(i), "Temp-Sensor", "temp_sensor_" + i);
      var co2Sensor = new hwComponent(String(i), "CO2-Sensor", "co2_sensor_" + i);
      var fan = new hwComponent(String(i), "Fan", "fan_" + i);
      var zoneHeater = new hwComponent(String(i), "Zone-Heater", "zone_heater_" + i);

      this.hwComponents.push(tempSensor);
      this.hwComponents.push(co2Sensor);
      this.hwComponents.push(fan);
      this.hwComponents.push(zoneHeater);
    }
    var heatCoil = new hwComponent("Vent", "Heat-Coil", "heat_coil");
    var coolCoil = new hwComponent("Vent", "Cool-Coil", "cool_coil");
    var humiditySensor = new hwComponent("Vent", "Humidity-Sensor", "humidity_sensor_vent");
    var tempSensorVent = new hwComponent("Vent", "Temp-Sensor", "temp_sensor_vent");
    var pressureSensor = new hwComponent("Boiler", "Pressure-Sensor", "pressure_sensor_boiler");
    var damperIn = new hwComponent("Vent", "Damper", "damper_in");
    var damperRecycle = new hwComponent("Vent", "Damper", "damper_recycle");
    var damperOut = new hwComponent("Vent", "Damper", "damper_out");
    this.hwComponents.push(heatCoil);
    this.hwComponents.push(coolCoil);
    this.hwComponents.push(humiditySensor);
    this.hwComponents.push(tempSensorVent);
    this.hwComponents.push(damperIn);
    this.hwComponents.push(damperRecycle);
    this.hwComponents.push(damperOut);
    this.hwComponents.push(pressureSensor);
  }

  getHWComponentList(){
    var comps = [];
    for (var i = 0; i < this.hwComponents.length; i++){
      var hwComp = {};
      hwComp["zone"] = this.hwComponents[i].zone;
      hwComp["type"] = this.hwComponents[i].type;
      hwComp["id"] = this.hwComponents[i].id;
    }
    return comps;
  }

  addHWComponent(type, id){
    var newComp = new hwComponent(type, id);
    this.hwComponents.push(newComp);
  }

  getReadings(){
    var readings = [];
    for (var i = 0; i < this.hwComponents.length; i++){
      var hwComp = {};
      hwComp["zone"] = this.hwComponents[i].zone;
      hwComp["type"] = this.hwComponents[i].type;
      hwComp["id"] = this.hwComponents[i].id;
      hwComp["reading"] = this.hwComponents[i].reading;
      readings.push(hwComp);
    }
    return readings;
  }

  getReadingsByType(type){
    var readings = [];
    for (var i = 0; i < this.hwComponents.length; i++){
      if (this.hwComponents[i].type === type){
        var hwComp = {};
        hwComp["zone"] = this.hwComponents[i].zone;
        hwComp["type"] = this.hwComponents[i].type;
        hwComp["id"] = this.hwComponents[i].id;
        hwComp["reading"] = this.hwComponents[i].reading;
        readings.push(hwComp);
      }
    }
    return readings;
  }

  getReadingById(id){
    var reading;
    for (var i = 0; i < this.hwComponents.length; i++){
      if (this.hwComponents[i].id === id){
        var hwComp = {};
        hwComp["zone"] = this.hwComponents[i].zone;
        hwComp["type"] = this.hwComponents[i].type;
        hwComp["id"] = this.hwComponents[i].id;
        hwComp["reading"] = this.hwComponents[i].reading;
        readings = hwComp;
      }

    return reading;
    }
  }

  setReadingById(id, value){
    for (var i = 0; i < this.hwComponents.length; i++){
      if (this.hwComponents[i].id === id){
        this.hwComponents[i].setReading(value);
      }
    }
    return;
  }

  setPowerById(id, value){
    for (var i = 0; i < this.hwComponents.length; i++){
      if (this.hwComponents[i].id === id){
        this.hwComponents[i].setPower(value);
      }
    }
    return;
  }
}

module.exports = HWController;
