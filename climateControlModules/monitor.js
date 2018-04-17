class Monitor {
  constructor(){
    this.hwComponents = [];
    this.hwReadings = [];
    this.monitoredReadings = [];
  }

  updateHWComponentList(hwComponents){
    this.hwComponents = hwComponents;
  }

  updateHWReadings(hwReadings){
    this.hwReadings = hwReadings;
  }

  monitor(){
    for (var i = 0; i < this.hwReadings.length; i++){
      var component = this.hwReadings[i];
      if (component.reading == null){
        component["status"] = "ERROR: Component malfunction";
        this.monitoredReadings.append(component);
      } else {
        if (component.type == "Temp-Sensor"){
          component["status"] = getTempStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "CO2-Sensor"){
          component["status"] = getCO2Status(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Pressure-Sensor"){
          component["status"] = getPressureStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Humidity-Sensor"){
          component["status"] = getHumidityStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Damper"){
          component["status"] = getDamperStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Fan"){
          component["status"] = getFanStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Zone-Heater"){
          component["status"] = getHeaterStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Heat-Coil"){
          component["status"] = getHeaterStatus(component.reading);
          this.monitoredReadings.append(component);
        }
        else if (component.type == "Cool-Coil"){
          component["status"] = getCoolerStatus(component.reading);
          this.monitoredReadings.append(component);
        }
      }
    }
  }

  getTempStatus(reading){
    var status = "OK"
    if (reading < -40 || reading > 70) {
      status = "ERROR: Component malfunction";
    }
    else if (reading < 0 || reading > 40){
      status = "WARNING";
    }
    return status;
  }

  getCO2Status(reading){
    var status = "OK"
    if (reading < 0 || reading > 100000) {
      status = "ERROR: Component malfunction";
    }
    else if (reading > 1000 && reading <= 2000){
      status = "WARNING: CO2 above ideal levels";
    }
    else if (reading > 2000 && reading <= 5000) {
      status = "ALERT: CO2 above acceptable levels";
    }
    else if (reading > 5000 && reading <= 40000){
      status = "ALERT: CO2 approaching dangerous levels";
    }
    else if (reading > 40000){
      status = "ALERT: CO2 at dangerous levels";
    }

    return status;
  }

  getPressureStatus(reading){
    var status = "OK";
    if (reading < 0 || reading > 200) {
      status = "ERROR: Component malfunction";
    }
    else if (reading > 50 && reading <= 60){
      status = "WARNING: Boiler pressure approaching dangerous levels";
    }
    else if (reading > 60){
      status = "ALERT: Boiler pressure at dangerous levels";
    }
    return status;
  }

  getHumidityStatus(reading){
    var status = "OK";
    if (reading < 0 || reading > 100){
      status = "ERROR: Component malfunction";
    }

    return status;
  }

  getFanStatus(reading){
    var status = "OK";
    if (reading < 0 || reading > 300) {
      status = "ERROR: Component malfunction";
    }
    return status;
  }

  getDamperStatus(reading){
    var status = "OK";
    if (reading < 0 || reading > 100){
      status = "ERROR: Component malfunction";
    }

    return status;
  }

  getHeaterStatus(reading){
    var status = "OK";
    if (reading < 0 || reading > 70){
      status = "ERROR: Component malfunction";
    }
    return status;
  }

  getCoolerStatus(reading){
    var status = "OK";
    if (reading < 0 || reading < 30){
      status = "ERROR: Component malfunction";
    }
    return status;
  }


  getMonitorReadings(){
    return this.monitoredReadings;
  }

}

module.exports = Monitor;
