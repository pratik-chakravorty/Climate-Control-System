var expect = require("expect");
var _settings = require("../climateControlModules/settings");
var settings = new _settings();

describe("Settings tests", function(){
  describe("Update settings", function(){
    it("Returns error with invalid id", function(){
      var result = settings.updateSettings("invalid", 100);
      expect(result).toEqual("Error: Invalid Setting ID");
    });

    it("Returns error with null value", function(){
      var result = settings.updateSettings(null, 100);
      expect(result).toEqual("Error: Invalid Setting ID");
    });

    it("Updates with temp valid", function(){
      var result = settings.updateSettings("temp_zone_0", 30);
      expect(result).toEqual("OK");
    });

    it("Returns error with temp too low", function(){
      var result = settings.updateSettings("temp_zone_0", -5);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with temp too high", function(){
      var result = settings.updateSettings("temp_zone_0", 70);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with co2 valid", function(){
      var result = settings.updateSettings("co2_zone_0", 300);
      expect(result).toEqual("OK");
    });

    it("Returns error with co2 too low", function(){
      var result = settings.updateSettings("co2_zone_0", -5);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with co2 too high", function(){
      var result = settings.updateSettings("co2_zone_0", 1000);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with humidity valid", function(){
      var result = settings.updateSettings("humidity_level", 30);
      expect(result).toEqual("OK");
    });

    it("Returns error with humidity too low", function(){
      var result = settings.updateSettings("humidity_level", -1);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with humidity too high", function(){
      var result = settings.updateSettings("humidity_level", 100);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with pressure valid", function(){
      var result = settings.updateSettings("pressure_boiler", 30);
      expect(result).toEqual("OK");
    });

    it("Returns error with pressure too low", function(){
      var result = settings.updateSettings("pressure_boiler", 10);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with pressure too high", function(){
      var result = settings.updateSettings("pressure_boiler", 101);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with fan valid", function(){
      var result = settings.updateSettings("fan_zone_0", 200);
      expect(result).toEqual("OK");
    });

    it("Returns error with fan too low", function(){
      var result = settings.updateSettings("fan_zone_0", -1);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with fan too high", function(){
      var result = settings.updateSettings("fan_zone_0", 600);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with damper valid", function(){
      var result = settings.updateSettings("damper_in", 50);
      expect(result).toEqual("OK");
    });

    it("Returns error with damper too low", function(){
      var result = settings.updateSettings("damper_in", -1);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with damper too high", function(){
      var result = settings.updateSettings("damper_in", 101);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Updates with coil valid", function(){
      var result = settings.updateSettings("coil_heat", 1);
      expect(result).toEqual("OK");
    });

    it("Returns error with coil too low", function(){
      var result = settings.updateSettings("coil_heat", -1);
      expect(result).toEqual("Error: Invalid setting value");
    });

    it("Returns error with coil too high", function(){
      var result = settings.updateSettings("coil_heat", 2);
      expect(result).toEqual("Error: Invalid setting value");
    });

  });
});
