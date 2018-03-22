
class hwComponent{
  constructor(type, id){
    this.type = type;
    this.id = id;
    this.reading = 0;
  }

  setReading(value){
    this.reading = value;
  }
}

module.exports = hwComponent;
