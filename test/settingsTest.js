var expect = require("chai").expect;
var _settings = require("../climateControlModules/settings");
var settings = new _settings();

describe("Settings tests", function(){
  describe("Update settings"), function(){
    it("Returns error with invalid id", function(){
      var result = settings.updateSettings("invalid", 100);
      expect(result).to.equal("Error: Invalid Setting ID");
    });

    it("Returns error with null value", function(){
      var result = settings.updateSettings(null, 100);
      expect(result).to.equal("Error: Invalid Setting ID");
    });

    it("Updates with temp valid", function(){
      var result = settings.updateSettings("temp", 30);
      expect(result).to.equal("OK");
    });

    it("Returns error with temp too low", function(){
      var result = settings.updateSettings("temp", -5);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with temp too high", function(){
      var result = settings.updateSettings("temp", 70);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with co2 valid", function(){
      var result = settings.updateSettings("co2", 300);
      expect(result).to.equal("OK");
    });

    it("Returns error with co2 too low", function(){
      var result = settings.updateSettings("co2", -5);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with co2 too high", function(){
      var result = settings.updateSettings("co2", 1000);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with humidity valid", function(){
      var result = settings.updateSettings("humidity", 30);
      expect(result).to.equal("OK");
    });

    it("Returns error with humidity too low", function(){
      var result = settings.updateSettings("humidity", -1);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with humidity too high", function(){
      var result = settings.updateSettings("humidity", 100);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with pressure valid", function(){
      var result = settings.updateSettings("pressure", 30);
      expect(result).to.equal("OK");
    });

    it("Returns error with pressure too low", function(){
      var result = settings.updateSettings("pressure", 10);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with pressure too high", function(){
      var result = settings.updateSettings("pressure", 101);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with fan valid", function(){
      var result = settings.updateSettings("fan", 200);
      expect(result).to.equal("OK");
    });

    it("Returns error with fan too low", function(){
      var result = settings.updateSettings("fan", -1);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with fan too high", function(){
      var result = settings.updateSettings("fan", 600);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with damper valid", function(){
      var result = settings.updateSettings("damper", 50);
      expect(result).to.equal("OK");
    });

    it("Returns error with damper too low", function(){
      var result = settings.updateSettings("damper", -1);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with damper too high", function(){
      var result = settings.updateSettings("damper", 101);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Updates with coil valid", function(){
      var result = settings.updateSettings("coil", 20);
      expect(result).to.equal("OK");
    });

    it("Returns error with coil too low", function(){
      var result = settings.updateSettings("coil", -1);
      expect(result).to.equal("Error: Invalid setting value");
    });

    it("Returns error with coil too high", function(){
      var result = settings.updateSettings("coil", 100);
      expect(result).to.equal("Error: Invalid setting value");
    });

  }
})
