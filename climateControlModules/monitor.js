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
      if (this.hwReadings[i].type == ""){
        
      }
      if (this.hwReadings[i].type == ""){

      }
    }
  }

  getMonitorReadings(){
    return this.monitoredReadings;
  }

}

module.exports = Monitor;
