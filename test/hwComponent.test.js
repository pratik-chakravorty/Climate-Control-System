var expect = require("expect");
var _hwComponent = require("../climateControlModules/hwComponent");

describe("hwComponent Tests", function(){
  describe("setReading Tests", function(){
    it("Returns error if trying to set Temp-Sensor reading", function(){
      var hwComponent = new _hwComponent("0", "Temp-Sensor", "temp_sensor_0");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("Error: Cannot set reading of Temp-Sensor");
    });

    it("Returns error if trying to set CO2-Sensor reading", function(){
      var hwComponent = new _hwComponent("0", "CO2-Sensor", "co2_sensor_0");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("Error: Cannot set reading of CO2-Sensor");

    });

    it("Returns error if trying to set Humidity-Sensor reading", function(){
      var hwComponent = new _hwComponent("Vent", "Humidity-Sensor", "humidity_sensor_vent");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("Error: Cannot set reading of Humidity-Sensor");

    });

    it("Returns error if trying to set Pressure-Sensor reading", function(){
      var hwComponent = new _hwComponent("Boiler", "Pressure-Sensor", "pressure_sensor_boiler");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("Error: Cannot set reading of Pressure-Sensor");

    });

    it("Updates if Fan value valid", function(){
      var hwComponent = new _hwComponent("0", "Fan", "fan_0");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("OK");

    });

    it("Returns error if Fan value too low", function(){
      var hwComponent = new _hwComponent("0", "Fan", "fan_0");
      var result = hwComponent.setReading(-1);
      expect(result).toEqual("Error: Invalid value");

    });

    it("Returns error if Fan value too high", function(){
      var hwComponent = new _hwComponent("0", "Fan", "fan_0");
      var result = hwComponent.setReading(400);
      expect(result).toEqual("Error: Invalid value");

    });

    it("Updates if Zone-Heater value valid", function(){
      var hwComponent = new _hwComponent("0", "Zone-Heater", "zone_heater_0");
      var result = hwComponent.setReading(30);
      expect(result).toEqual("OK")

    });

    it("Returns error if Zone-Heater value too low", function(){
      var hwComponent = new _hwComponent("0", "Zone-Heater", "zone_heater_0");
      var result = hwComponent.setReading(-1);
      expect(result).toEqual("Error: Invalid value");

    });

    it("Returns error if Zone-Heater value too high", function(){
      var hwComponent = new _hwComponent("0", "Zone-Heater", "zone_heater_0");
      var result = hwComponent.setReading(100);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Updates if Heat-Coil value valid", function(){
      var hwComponent = new _hwComponent("Vent", "Heat-Coil", "heat_coil");
      var result = hwComponent.setReading(30);
      expect(result).toEqual("OK")
    });

    it("Returns error if Heat-Coil value too low", function(){
      var hwComponent = new _hwComponent("Vent", "Heat-Coil", "heat_coil");
      var result = hwComponent.setReading(-1);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Returns error if Heat-Coil value too high", function(){
      var hwComponent = new _hwComponent("Vent", "Heat-Coil", "heat_coil");
      var result = hwComponent.setReading(100);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Updates if Cool-Coil value valid", function(){
      var hwComponent = new _hwComponent("Vent", "Cool-Coil", "cool_coil");
      var result = hwComponent.setReading(10);
      expect(result).toEqual("OK")
    });

    it("Returns error if Cool-Coil value too low", function(){
      var hwComponent = new _hwComponent("Vent", "Cool-Coil", "cool_coil");
      var result = hwComponent.setReading(-1);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Returns error if Cool-Coil value too high", function(){
      var hwComponent = new _hwComponent("Vent", "Cool-Coil", "cool_coil");
      var result = hwComponent.setReading(100);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Updates if Damper value valid", function(){
      var hwComponent = new _hwComponent("Vent", "Damper", "damper_in");
      var result = hwComponent.setReading(30);
      expect(result).toEqual("OK")
    });

    it("Returns error if Damper value too low", function(){
      var hwComponent = new _hwComponent("Vent", "Damper", "damper_in");
      var result = hwComponent.setReading(-1);
      expect(result).toEqual("Error: Invalid value");
    });

    it("Returns error if Damper value too high", function(){
      var hwComponent = new _hwComponent("Vent", "Damper", "damper_in");
      var result = hwComponent.setReading(101);
      expect(result).toEqual("Error: Invalid value");
    });


  });
});
