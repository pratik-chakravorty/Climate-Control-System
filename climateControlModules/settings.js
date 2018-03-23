class Settings {
  constructor(){
    this.settingsJSON = {
      "temp_zone_0": 20,
      "temp_zone_1": 20,
      "temp_zone_2": 20,
      "co2_zone_0": 200,
      "co2_zone_1": 200,
      "co2_zone_2": 200,
      "humidity_level": 30,
      "pressure_boiler": 60
    };

    this.validTypes = ["temp", "co2", "humidity", "pressure"];
  }

  getSettings(){
    return this.settingsJSON;
  }

  updateSettings(id, value){
    var status = "Error";
    var settingType = id.split("_")[0];
    if (this.settingsJSON.hasOwnProperty(id)) {
      if (settingType === "temp" && value > 0 && value < 50){
        this.settingsJSON[id] = value;
        status = "OK";
      } else if (settingType === "co2" && value > 0 && value < 800){
        this.settingsJSON[id] = value;
        status = "OK";
      } else if (settingType === "humidity" && value > 10 && value < 80){
        this.settingsJSON[id] = value;
        status = "OK";
      } else if (settingType === "pressure" && value > 20 && value < 100){
        this.settingsJSON[id] = value;
        status = "OK";
      } else {
        status = "Invalid setting value";
      }
    } else {
      status = "Invalid Setting ID";
    }

    return status;
  }
}


module.exports = Settings;
