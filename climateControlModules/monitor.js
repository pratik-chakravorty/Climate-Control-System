class Monitor {
  constructor(){
    this.hwReadings = [];
  }

  updateHWReadings(hwReadings){
    this.hwReadings = hwReadings;
  }

  getMonitorReadings(){
    return this.hwReadings;
  }

}

module.exports = Monitor;
