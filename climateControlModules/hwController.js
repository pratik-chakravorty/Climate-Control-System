var hwComponent = require('./hwComponent');

class HWController{
  constructor(){
    this.hwComponents = [];
  }

  buildHWComponentList(){
    var sensor = new hwComponent("Temp-Sensor", "tempsensor1");
    this.hwComponents.push(sensor);
    var fan = new hwComponent("Fan", "fan1");
    this.hwComponents.push(fan);
  }

  addHWComponent(type, id){
    var newComp = new hwComponent(type, id);
    this.hwComponents.push(newComp);
  }

  getReadings(){
    var readings = [];
    for (var i = 0; i < this.hwComponents.length; i++){
      var hwComp = [];
      hwComp.push(this.hwComponents[i].id);
      hwComp.push(this.hwComponents[i].reading);
      readings.push(hwComp);
    }
    return readings;
  }
}

module.exports = HWController;
