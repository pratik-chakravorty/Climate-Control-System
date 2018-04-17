class Monitor {
  constructor(){
    this.hwComponents = [];
    this.hwReadings = [];
    this.monitoredReadings = [];
    this.componentErrors = [];
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
      var error = {id: "", errorMsg: ""};
      if (component.reading == null){
        error.id = this.hwReadings[i].id;
        error.errorMsg = "ERROR: Component malfunction";
      } else {
        if (component.type == "Temp-Sensor"){
          if
        }
        else if (component.type == "CO2-Sensor"){

        }
        else if (component.type == "Pressure-Sensor"){

        }
        else if (this.hwReadings[i].type == "Humidity-Sensor"){

        }
        else if (this.hwReadings[i].type == "Damper"){

        }
        else if (this.hwReadings[i].type == "Fan"){

        }
        else if (this.hwReadings[i].type == "Zone-Heater"){

        }
        else if (this.hwReadings[i].type == "Heat-Coil"){

        }
        else if (this.hwReadings[i].type == "Cool-Coil"){

        }
      }
    }
  }

  getMonitorReadings(){
    return this.hwReadings;
  }

}

module.exports = Monitor;
