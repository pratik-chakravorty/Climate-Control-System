
class hwComponent{
  constructor(zone, type, id){
    this.zone = zone;
    this.type = type;
    this.id = id;
    this.reading = 15;
    this.power = false;
  }

  setReading(value){
    this.reading = value;
  }

  setPower(bool){
    this.power = bool;
  }
}

module.exports = hwComponent;
