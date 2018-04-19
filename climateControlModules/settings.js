class Settings {
  constructor() {
    this.settingsJSON = {
      "fan_zone_0": 200,
      "fan_zone_1": 200,
      "fan_zone_2": 200,
      "temp_zone_0": 20,
      "temp_zone_1": 20,
      "temp_zone_2": 20,
      "co2_zone_0": 750,
      "co2_zone_1": 750,
      "co2_zone_2": 750,
      "damper_in": 50,
      "damper_recycle": 50,
      "damper_out": 50,
      "temp_vent": 20,
      "coil_heat": 0,
      "coil_cool": 0,
      "humidity_level": 30,
      "pressure_boiler": 60
    };



    this.validTypes = ["fan", "damper", "temp", "co2", "humidity", "pressure"];
  }

  getSettings() {
    return this.settingsJSON;
  }

  /*
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
        } else if (settingType === "fan" && value > 0 && value < 400) {
          this.settingsJSON[id] = value;
          status = "OK";
        } else if (settingType === "damper" && value > 0 && value < 100) {
          this.settingsJSON[id] = value;
          status = "OK";
        }
        else {
          status = "Invalid setting value";
        }
      } else {
        status = "Invalid Setting ID";
=======

  // bypassOptimizerSettings(){
  //
  //   return toReturn;
  // }
/*
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
      } else if (settingType === "fan" && value > 0 && value < 400) {
        this.settingsJSON[id] = value;
        status = "OK";
      } else if (settingType === "damper" && value > 0 && value < 100) {
        this.settingsJSON[id] = value;
        status = "OK";
      }
      else {
        status = "Invalid setting value";
>>>>>>> 62bde814216b5b69f73136518e279085431187ba
      }

      return status;
    }
    */
  updateSettings(id, value) {
    var status = "Error";
    if (!id) {
      status = "Error: Invalid Setting ID";
    } else {
      var settingType = id.split("_")[0];
      if (this.settingsJSON.hasOwnProperty(id)) {
        if ((settingType === "temp" && value > 0 && value < 50) ||
          (settingType === "co2" && value > 0 && value < 800) ||
          (settingType === "humidity" && value > 10 && value < 80) ||
          (settingType === "pressure" && value > 20 && value < 100) ||
          (settingType === "fan" && value > 0 && value < 400) ||
          (settingType === "damper" && value > 0 && value < 100) ||
          (settingType === "coil" && value >= 0 && value <= 1)) {
          this.settingsJSON[id] = value;
          status = "OK";
          console.log('Check it')
          console.log(this.settingsJSON);
        }
        else {
          status = "Error: Invalid setting value";
        }
      } else {
        status = "Error: Invalid Setting ID";
      }
    }

    return status;
  }
}


module.exports = Settings;
